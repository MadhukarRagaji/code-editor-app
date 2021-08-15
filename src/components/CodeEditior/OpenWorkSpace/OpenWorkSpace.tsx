import { Button, makeStyles } from '@material-ui/core';
import React, { AriaAttributes, DOMAttributes, useRef } from 'react';
import { useAppDispatch } from '../../../store/hook';
import readFiles from '../../../store/thunks/readFiles/readFiles';

import { commonColors } from '../../../theme/color';

const useStyles = makeStyles({
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
});

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

const OpenWorkSpace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    directoryInputRef.current?.click();
  };

  const dispatch = useAppDispatch();

  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button className={classes.button} onClick={onClick}>
        Open WorkSpace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUploaded}
      />
    </div>
  );
};

export default OpenWorkSpace;
