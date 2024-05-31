import React,{useState} from 'react';

const Tp = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('photo', photo);
      try {
          const response = await fetch('/upload', {
              method: 'POST',
              body: formData,
          });
          
          if (response.ok) {
              alert('Photo uploaded successfully');
          } else {
              console.error('There was an error uploading the photo');
          }
      } catch (error) {
          console.error('There was an error uploading the photo', error);
      }
  };

  return (

    <form onSubmit={handleSubmit}>
    <div>
        <label>Title</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Description</label>
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Photo</label>
        <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
        />
    </div>
    <button type="submit">Upload</button>
</form>

  );
}

export default Tp;
