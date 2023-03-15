

export default function Footer() {

    return (

        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-2 dark:bg-sky-500 static bottom-0 w-full">
            <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Politica de privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licencias</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-white">© 2022 <a href="https://flowbite.com/" className="hover:underline">Shopping Goods</a>. All Rights Reserved.
            </span>
        </footer>
    )
}