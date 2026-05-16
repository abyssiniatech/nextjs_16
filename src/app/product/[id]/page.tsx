export default async function Users({params}:{params:promise<{id:string}>}){
    const {id} =await params;
   return(
    <div className="min-h-screen bg-indigo-900 text-white flex justify-center items-center justify-center">
        <section>
            <h1>User:<span className='text-teal-700 text-2xl'>{id}</span></h1>
        </section>
    </div>
   )
}