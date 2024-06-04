import Capture from '../../../../assets/images/images.png'
import Navbar from '../navbar/navbar'
export default function Header(){
    return(
        <main>
            <div className="flex">
                <p className="w-1/3 p-2 border-2 text-center">Hello nice people, welcome to my blog</p>
                <p className="w-2/3 p-2 border-2 text-center cursor-pointer hover:text-yellow-400 font-bold">contactabc@gmail.com</p>
            </div>
            <div className='w-full h-64 border-b-2 flex justify-center items-center'>
                <img className='w-48 h-48' src='https://juliesmerdon.com/wp-content/uploads/2021/08/Julie-Smerdon-dark.png'/>
            </div>
            <Navbar/>
        </main>
    )
}