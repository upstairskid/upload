$('.box__file').on('change',handleFileUploadChange);
$('.box__button'),on('click',handleFileUploadSubmit);

let selectedFile;

function handleFileUploadChange(e) {
    selectedFile = e.target.file[0];
}

function handleFileUploadSubmit(e){
    const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); 
    //create a child directory called images, and place the file inside this directory
    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    }, (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    }, () => {
       // Do something once upload is complete
       console.log('success');
    });

}