import style from "./basic.module.css"
export default function Basic(){
    return(
        <section className="bg-indigo-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div>
            <h1 className={style.title}>Day1:</h1>
        </div>
        </section>
    )
}