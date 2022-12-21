
export default function listaRanking({songs}){
    return(
        <div>
            {songs.map((objeto) => (
            <div>
                <p>{objeto.nombre}</p>
                <p>{objeto.likes}</p>
            </div>
        ))}
        </div>
    )
}