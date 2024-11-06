import React from "react";

import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewItem,
} from "../../react/components/core/tree-view";

const TreeViewPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="w-96">
          <TreeView>
            <TreeViewBranch value="item-1">
              <TreeViewBranchControl>Item 1</TreeViewBranchControl>
              <TreeViewBranchContent>
                <TreeViewItem value="item-1.1">Item 1.1</TreeViewItem>
                <TreeViewItem value="item-1.2">Item 1.2</TreeViewItem>
              </TreeViewBranchContent>
            </TreeViewBranch>

            <TreeViewBranch value="item-2">
              <TreeViewBranchControl>Item 2</TreeViewBranchControl>
              <TreeViewBranchContent>
                <TreeViewBranch value="item-2.1">
                  <TreeViewBranchControl>Item 2.1</TreeViewBranchControl>
                  <TreeViewBranchContent>
                    <TreeViewItem value="item-2.1.1">Item 2.1.1</TreeViewItem>
                    <TreeViewItem value="item-2.1.2">Item 2.1.2</TreeViewItem>
                  </TreeViewBranchContent>
                </TreeViewBranch>
                <TreeViewItem value="item-2.2">Item 2.2</TreeViewItem>
              </TreeViewBranchContent>
            </TreeViewBranch>

            <TreeViewItem value="">Item 3</TreeViewItem>
          </TreeView>
        </div>
      </div>
    </div>
  );
};

export default TreeViewPage;
