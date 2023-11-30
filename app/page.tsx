import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex flex-col gap-5"> <h1>Welcome to DropBox</h1>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae, sapiente quae placeat consequuntur minima iure facere, praesentium incidunt voluptatem aperiam consequatur vitae ullam nemo odit natus accusantium qui corporis?</div>
        <Link className=" p-5 bg-red-500 w-1/3 flex justify-center items-center" href={'/dashbord'}>
          Try it out 
          </Link></div>
      <div></div>
    </main>
  )
}
