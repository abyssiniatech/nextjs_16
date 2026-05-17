import style from "./basic.module.css"
export default async function Basic({params}:{params:Promise<{id:string}>}){
    const {id} =await params
    return(
        <section className="bg-indigo-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div>
            <h1 className={style.title}>Day1:{id}</h1>
        </div>
        </section>
    )
}