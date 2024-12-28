import Doubloon from "./Doubloon"
import githubIcon from "./github.svg"

export default function App() {
    return (
        <div class>
            <header
            class="p-2 bg-white items-center flex flex-col fixed z-10 w-full duration-500">
                <div class="w-full lg:w-7/12 flex flex-row items-center justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <img src="https://highseas.hackclub.com/doubloon.svg" alt="Doubloon" class="w-8 h-8" />

                        <h1 class="text-2xl text-black hover:font-bold duration-500">
                            Douboom
                        </h1>
                    </div>

                    <a href="https://github.com/theluqmn/douboom" target="_blank">
                        <img src={githubIcon} class="w-6 h-6" />
                    </a>
                </div>
            </header>

            <div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base">
                <h1 class="text-[rgb(241,196,15)] text-5xl">
                    My 2024/2025 Hack Seas Journey
                </h1>

                <p class="text-[rgb(235,235,235)] text-base">
                    I joined Hack Seas 2024/2025 on 26th December 2024 - roughly one month later compared
                    to the other participants. Despite the late start, I am confident and ready to make the most
                    of this opportunity and prove my competence.
                </p>

                <Doubloon />
                <p class="text-[rgb(235,235,235)] text-sm">
                    Real-world count of doubloons and rank. Refresh to update.
                </p>

                <div class="pt-64 flex flex-col gap-4">
                    <h1 class="text-[rgb(241,196,15)] text-3xl">
                        Projects
                    </h1>

                    <p class="text-[rgb(235,235,235)] text-base">
                        All the projects I worked on specifically for High Seas 2024 (the doubloon grind)
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProjectCard title="Douboom" description= "A website that tells about my 2024/2025 Hack Seas journey." link="https://theluqmn.github.io/douboom" image="https://cloud-9u0lqspt8-hack-club-bot.vercel.app/0image.png" />
                        <ProjectCard title="Boeing 737NG FMS" description= "A web-based simulator of the Boeing 737-800's flight management system (FMS)." link="https://theluqmn.github.io/737fms" image="https://cloud-jls4b58tn-hack-club-bot.vercel.app/0image.png" />
                    </div>
                </div>

                <div class="pt-32 flex flex-col gap-4">
                    <h1 class="text-[rgb(241,196,15)] text-3xl">
                        Items to redeem
                    </h1>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <DoubloonCard title="Hack Club MicroSD Card" doubloons="32" image="https://noras-secret-cdn.hackclub.dev/shop/microsd.png/" />
                        <DoubloonCard title="GitHub Invertocat Pin" doubloons="76" image="https://noras-secret-cdn.hackclub.dev/shop/gh_invertocat_pin.png" />
                        <DoubloonCard title="Blåhaj" doubloons="123" image="https://noras-secret-cdn.hackclub.dev/shop/blahaj.png" />
                        <DoubloonCard title="GitHub Notebook" doubloons="140" image="https://noras-secret-cdn.hackclub.dev/shop/gh_denik_layflat_notebook.png" />
                        <DoubloonCard title="YubiKey" doubloons="264" image="https://noras-secret-cdn.hackclub.dev/shop/yubikey.png" />
                        <DoubloonCard title="Raspberry Pi 5" doubloons="275" image="https://cloud-k3f252fo0-hack-club-bot.vercel.app/0raspberry_pi_5.png" />
                        <DoubloonCard title="iPad 10th Gen w/Apple Pencil" doubloons="2090" image="https://noras-secret-cdn.hackclub.dev/shop/ipad.png" />
                    </div>
                </div>
            </div>

            <footer>
                <div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base">
                    <h1 class="text-white text-2xl">
                        Douboom
                    </h1>

                    <p class="text-white">
                        Designed and developed by <a href="https://theluqmn.github.io" target="_blank" class="text-[rgb(241,196,15)]" >Luqman</a>.
                        Deployed on GitHub Pages, built with JavaScript and Solidjs. Visit the repo on <a href="https://github.com/theluqmn/douboom" target="_blank" class="text-[rgb(241,196,15)]">GitHub</a>.
                    </p>
                </div>
            </footer>
        </div>
    )
}

function ProjectCard(props) {
    return (
        <div>
            <div class="p-4 rounded-md bg-white flex flex-col items-start gap-2 h-full text-left">
                <h1 class="text-2xl text-black font-semibold">
                    {props.title}
                </h1>

                <img src={props.image} class="object-cover aspect-square rounded-md self-start object-left-top" />

                <p class="text-gray-800">
                    {props.description}
                </p>

                <button onClick={() => window.open(props.link)} class="p-2 rounded-md font-semibold bg-white  text-black hover:bg-black hover:text-white duration-500 mt-auto">
                    View Project
                </button>
            </div>
        </div>
    )
}

function DoubloonCard(props) {
    return (
        <div class="p-4 rounded-md bg-white flex flex-col items-center gap-2 h-full">
            <h1 class="text-2xl text-black font-semibold text-center">
                {props.title}
            </h1>

            <img src={props.image} alt="Doubloon" class="w-32 h-32 object-contain hover:scale-105 duration-700" />

            <div class="p-2 rounded-md bg-[rgb(247,220,111)] text-black hover:bg-black hover:text-white duration-500 mt-auto">
                <p class="text-center">
                    {props.doubloons} Doubloons
                </p>
            </div>
        </div>    
    )
}