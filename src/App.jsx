export default function App() {
    return (
        <div class>
            <header
            class="p-2 bg-[rgb(241,196,15)] items-center flex flex-col fixed z-10 w-full duration-500">
                <div class="lg:w-7/12 flex flex-row items-center gap-2">
                    <h1 class="text-2xl text-black hover:font-bold duration-500">
                        Douboom
                    </h1>
                </div>
            </header>

            <div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base">
                <h1 class="text-[rgb(241,196,15)] text-3xl">
                    My 2024/2025 Hack Seas Journey
                </h1>

                <p class="text-[rgb(235,235,235)] text-base">
                    I joined Hack Seas 2024/2025 on 26th December 2024 - roughly one month later compared
                    to the other participants. Despite the late start, I am confident and ready to make the most
                    of this opportunity and prove my competence.
                </p>

                <div class="pt-16 flex flex-col gap-2">
                    <h1 class="text-[rgb(241,196,15)] text-3xl">
                        Projects
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProjectCard title="Douboom" description= "A website that tells about my 2024/2025 Hack Seas journey." link="https://theluqmn.github.io/douboom" />
                    </div>
                </div>

                <div class="pt-16 flex flex-col gap-2">
                    <h1 class="text-[rgb(241,196,15)] text-3xl">
                        Items to redeem
                    </h1>

                    <h2 class="text-gray-100 text-xl">
                        Doubloon goal: 3,000
                    </h2>

                    <h2 class="text-gray-100 text-xl">
                        Rank goal: Top 10
                    </h2>

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

                <p class="text-gray-800">
                    {props.description}
                </p>

                <button onClick={() => window.open(props.link)} class="p-2 rounded-md bg-[rgb(247,220,111)] text-black hover:bg-black hover:text-white duration-500 mt-auto">
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