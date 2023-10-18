const Message = ({message,handleMessage})=>{
    return (
        <>
            <p>Mensagem: {message}</p>
            <button onClick={()=>{
                handleMessage("Olá Vini")
            }}>
                Clique
            </button>
        </>
    );
}

export default Message;