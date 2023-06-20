// Reverse the sidebar items ordering (including nested category items)
const semver = require("semver");


function getTitleFromItemId(id) {
  return id.split("/").at(-1)
}

function getSemverFromId(id) {
  try {
    // console.log('id',id.split('/').at(-1))
    return semver.parse(getTitleFromItemId(id));
  } catch (error) {
    return null;
  }
}


function addItemTitle(item) {
  return {
    ...item,
    label: getTitleFromItemId(item.id)
  }
}

/**
 * This function sorts the Release Notes section by semver, leaving all other sorting to the default sorting algorthm
 * More info below:
 * https://docusaurus.io/docs/sidebar/autogenerated#customize-the-sidebar-items-generator
 * @param {*} items
 * @param {*} sortBySemver
 * @returns
 */
function sortSidebarItems(items, sortBySemver = false) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === "category") {
      if (item.label === "Release Notes") {
        return { ...item, items: sortSidebarItems(item.items, true) };
      } else {
        return { ...item, items: sortSidebarItems(item.items) };
      }
    }
    return item;
  });

  if (sortBySemver) {
    // Build subfolders for each major semver, then sort each one by minor semver

    const subfolderArrays = result.reduce((acc, item) => {
      const semverCompare = getSemverFromId(item.id);
      const compareString = `${semverCompare.major}.${semverCompare.minor}`;
      if (acc[compareString]) {
        acc[compareString].push(item);
      } else {
         acc[compareString] = [item];
      }
      return acc;
    }, {});

    const subfolders = Object.entries(subfolderArrays).map(([folderName, items]) => {
      return { type: "category", label: folderName, items: items.map(addItemTitle) };
    }).sort((a, b) => {
      // Reorder a, b to change sort direction
      return semver.compare(getSemverFromId(`${b.label}.0`), getSemverFromId(`${a.label}.0`));
    });

    // Set latest subfolder to open by default
    if (subfolders[0]) {
      subfolders[0].collapsed = false;
    }

    return subfolders;
  }
  return result;
}

module.exports = {
  sortSidebarItems,
};