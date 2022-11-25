export const setToken = (user) =>{
    const currentUser = {
        email: user.email
    }
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(currentUser)
   }) 
   .then(res => res.json())
   .then(data => {
       console.log(data);
       localStorage.setItem('accessToken', data.token);
   });

} 