export const setToken = (user) =>{
    const currentUser = {
        email: user.email
    }
      fetch('https://assignment-server-eta.vercel.app/jwt', {
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