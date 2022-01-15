import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import React from 'react';
import useFileUploadHook from '../hooks/useFileUploadHook';



function ProgressBar({file, setfile, setnewuserphoto}) {
    const {photourl, progress, error, notice} = useFileUploadHook(file)
    console.log(photourl);
    console.log(progress);
    console.log(error);
    console.log(notice);
    setnewuserphoto(photourl)
    // setfile(null)
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          progress,
        )}%`}</Typography>
      </Box>
    </Box>
    )
}

export default ProgressBar
