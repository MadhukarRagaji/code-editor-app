import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import selectFileViewData from '../../../store/selectors/selectFileViewerData/selectFileViewData';
import FileViewerStructure from '../../../types/FileViewerStructure';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import { TreeItem, TreeView } from '@material-ui/lab';
import { Folder, FolderOpen } from '@material-ui/icons';
import openFile from '../../../store/thunks/openFile/openFile';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 10px 10px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.font,
  },
  emptyMessage: {
    color: theme.font,
  },
}));

const FileViewer = () => {
  const classes = useStyles();
  const fileViewerData = useAppSelector(selectFileViewData);

  const dispatch = useAppDispatch();

  const onSelectNode = (node: FileViewerStructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: FileViewerStructure) => {
    const { id, name, extension } = node;

    return (
      <TreeItem
        className={classes.treeItem}
        nodeId={id}
        label={name}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
      >
        {Array.isArray(node.children) ? node.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  return (
    <TreeView className={classes.root} defaultCollapseIcon={<FolderOpen />} defaultExpandIcon={<Folder />}>
      {renderTree(fileViewerData)}
    </TreeView>
  );
};

export default FileViewer;
