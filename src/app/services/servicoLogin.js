import axios from 'axios';

async function loginUsuario({email, senha}) {
    console.log('chamou log')
    try {
        const response = await axios.post('https://serur-ia-sophia.vercel.app/api/auth/login', { 
            email:email,
            password:senha
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.error("Erro ao tentar fazer login:", error.message);
        return alert("Erro ao tentar fazer login!");
        
    }
    
}

export{
    loginUsuario
}