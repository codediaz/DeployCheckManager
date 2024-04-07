import Footer from '@/app/components/footer';
export default function Home() {
    return (
        <div className="bg-white dark:bg-black flex flex-col w-full p-4 pb-0 items-center min-h-screen">
            <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col items-center">
                <div className="flex flex-col items-center pt-16 sm:pt-24 md:pt-36 pb-10 w-full max-w-4xl">
                    <header className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-2"> Welcome to <span className="text-indigo-500">Deploy Check Manager</span>
                        </h1>

                        <p className="text-xl mt-5"> Organize your on-premises software deployments more
                            efficiently </p>
                    </header>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <a target="_blank" href="https://github.com/codediaz/DeployCheckManager">
                            <button
                                className=" inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-10 px-4 py-2">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="mr-2">
                                    <path
                                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                                Star on GitHub
                            </button>
                        </a>
                    </div>
                    <div
                        className="flex flex-row my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent">
                    </div>
                    <div className="flex flex-col"><h1
                        className="scroll-m-20 text-4xl tracking-tight lg:text-5xl !text-3xl font-semibold !mb-0">Define
                        your organization.<br/> Start deploy on-premises software.</h1><p
                        className="[&amp;:not(:first-child)]:mt-6 text-xl text-muted-foreground !mt-2 mb-4">Optimize workflow with an efficient tool designed for streamlined deployment management.</p><span
                        className="text-muted-foreground text-sm mt-2">You can select one of the examples formats below.</span>
                        <div className="flex flex-row flex-wrap gap-2 justify-start items-center my-2 w-full">
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-7 rounded-md px-2 whitespace-nowrap">SIRIUS
                            </button>
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-7 rounded-md px-2 whitespace-nowrap">GUIAA
                            </button>
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-7 rounded-md px-2 whitespace-nowrap">UNIC
                            </button>
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-7 rounded-md px-2 whitespace-nowrap">UNINCOL
                            </button>
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/40 hover:text-accent-foreground h-7 rounded-md px-2 whitespace-nowrap">UNIB
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
