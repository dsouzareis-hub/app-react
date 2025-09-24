function List(){

    function CadastrarUser(e){
        console.log("Cadastrou");
        e.preventDefault();
    }
    return(
<div>
    <form onSubmit={CadastrarUser}>
    <div>
        <input type="text" placeholder="Digite seu nome aqui"/>
    </div>
    
    <div>
        <input type="submit" value="Cadastrar" />
    </div>
    </form>   
</div> 

    );
}

export default List;