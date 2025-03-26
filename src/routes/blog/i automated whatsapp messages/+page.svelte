<svelte:head>
    <title>Saroj Regmi | I Automated 350+ Whatsapp Messages.</title>

    <meta
        name="description"
        content="I used Playwright, Unstract and Google AI studio to automate some messages."
    />

    <meta
        name="keywords"
        content="automation, whatsapp, playwright, unstract, ocr, Google Ai Studio, Saroj Regmi"
    />
    <meta name="author" content="Saroj Regmi" />

    <meta property="og:title" content="I Automated 350+ Whatsapp Messages." />
</svelte:head>

<div class="content w-full max-w-3xl flex gap-20 flex-col mb-50">
    <div class="top_header flex flex-col gap-2.5 mt-20">
        <header>I Automated 350+ Whatsapp Messages.</header>
        <p>
            I mean automating couple of hundreds of messages is not that big of
            a deal. But I was curious to see how it goes. Regardless it was a
            decent learning experience. That taught me many things.
        </p>

        <p>Wed, Mar 26 2025</p>
    </div>

    <div class="article-body flex flex-col gap-10">
        <div class="chunk flex flex-col gap-2.5">
            <h3 id="background">Background, what and why?</h3>
            <p>
                I one day received a request from a friend asking me to help her
                send 350+ whatsapp messages individually. For an upcoming
                student election promotion. I without having a second thought
                said yes and starting working on this <b>seemingly simple</b> task.
                This is where a journey full of excitement and frustration began.
                It had to be done within two days, from friday evening to saturday
                till night 12:00am. since all promotions after saturday were prohibited.
            </p>

            <backquote>
                I always wanted to have a personal blog but did not have time to
                code one. Unfortunately, this time when I wanted to share my
                experience I got slapped by <b>
                    you exceeded max character limit message
                </b>
                in linkedin. And after searching for solutions, thinking of getting
                a premium (trail that is) and talking to one of my friends. I decided
                to invest some time and setup a blog and properly documenting this
                experience.
                <br />
                I have actually open sourced the code for this blog and the project.
                If you are curious then you can check it out here.

                <a
                    href="https://github.com/sarojregmi200/wp-automation"
                    data-bold
                >
                    Project
                </a>,

                <a href="https://github.com/sarojregmi200/portfolio" data-bold>
                    Blog
                </a>
            </backquote>
        </div>

        <div class="chunk flex flex-col gap-2.5">
            <h3>What did i use?</h3>
            <p>
                After understanding the problem, I began thinking about the
                possible solutions that would:
            </p>

            <ol start="1">
                <li>
                    Work flawlessly, since I had to send only a single message
                    to individual phone numbers who may or maynot be connected
                    to my friend.
                </li>
                <li>
                    Work automatically, with minimal to no human intervention.
                </li>
                <li>Was doable within 1.25~ days (an evening and a day).</li>
            </ol>

            <br />
            <br />

            <p>
                There was a tool that I was familiar with, but it was not a tool
                specifically made for this task "only". Although in theory it
                could be used for automating tasks. It was designed as a testing
                tool for the web. To perform automated integration and E2E
                testing. You may have guessed it by now. It's non other than

                <a href="https://playwright.dev/" data-bold> Playwright. </a>

                <br />
                <br />
                It had a slight advantage over other tools to be honest. Their
                <a href="https://playwright.dev/docs/codegen" data-bold>
                    codegen
                </a> tool is just amazing for tasks that you want to automate within
                a short amount of time. Besides I wanted to test the tool itself
                (talk about having a good time).
            </p>

            <p>
                With that taken care of, I quickly began setting up Playwright
                and the things that were needed for to launch their codegen
                tool. This is where the luck runs out. All the time advantage
                that the tool would have given me was taken by the same tool.
                Let's not talk about the codegen tool I was not able to setup
                Playwright since,
            </p>
        </div>

        <div class="chunk flex flex-col gap-2.5">
            <h3>The issue with the tool I chose.</h3>
            <p>
                Good place to start right? As programmers it's always the case.
                Regardless here is the warning that I got.
                <br />
                BEWARE: your OS is not officially supported by Playwright; installing
                dependencies for ubuntu20.04-x64 as a fallback.
                <br />
                <br />

                <backquote>
                    What a great time to say that I use arch by the way.
                </backquote>

                <br />
                <br />
                It was just a warning or so I thought I got hit with a missing dependency
                error. I checked the
                <a href="https://aur.archlinux.org/" data-bold> aur </a> for
                those dependencies and found some but for some dependencies it
                was hard to find them, and were not working even after I got
                them. So, after trying to find and fix them for a while, I gave
                up.
                <br />
                But something within me was not ready to accept defeat so, had my
                dinner streched my fingers and typed
                <code> yay -Syu </code>. And patiently waited for half an hour,
                (yeah I did)

                <br />
                <br />
                After that I tried it again followed every instruction that I could
                follow on this topic. First I found a
                <a
                    href="https://www.reddit.com/r/linux4noobs/comments/rp76h1/how_can_i_do_playwright_installdeps_on_arch_linux/"
                >
                    reddit thread
                </a>
                which lead me to couple of github issues.
                <a href="https://github.com/microsoft/playwright/issues/30393">
                    [1]
                </a>
                <a
                    href="https://github.com/microsoft/playwright/issues/2621#issuecomment-931530175"
                >
                    [2]
                </a>
                <br />
                At last I made it working partially, I got the chrome instance working
                skipped others. Besides I was not trying to test the code that I
                was about to write. The test was the code that was going to do all
                the work.
            </p>
        </div>

        <div class="chunk flex flex-col gap-2.5">
            <h3>Finally started to code.</h3>
            <p>
                After all this hassle, I was finally starting to code. It was
                getting late so i called it a day and went to bed.
                <br />
                The next day I went straight to the code. I had to complete it this
                day or else there was no point of this automation. Why? just read
                the
                <a href="#background">background</a> clearly.

                <br />
                <br />
                While this task was not complicated, I had fun doing it. Thinking
                i may require this in future I tried to make it as modular and generic
                as I could have though of at that time. The code turned out to be
                ok. It was working fine. After informing my friend about it, I told
                her to send the phonenumbers and the message that was to be automated
                but here comes the twist.
            </p>
        </div>

        <div class="chunk flex flex-col gap-2.5">
            <h3>The twist.</h3>
            <p>
                The numbers were in a printed sheet of paper whose photo was
                taken from a mobile phone and converted into a pdf. At first I
                thought let's just use
                <a href="https://lens.google/">google lense</a> to copy the numbers
                but it turned out to be pretty unreliable. Some numbers were being
                recorgnized fine some were getting half recorgnized. Regardless I
                was unable to use it due to reliablility issues.
            </p>
            <p>
                So, I began searching a way to do this without potentially
                exposing those personal details of 350+ people. I tried using
                someone else's ocr script and got to same conclusion. It was
                half good and half bad. There was no way I could write my own
                OCR script since, I had only that day to complete the task.
                After searching for around couple of hours and testing different
                solutions. I came across a tool that amazed me. If you have been
                doing OCR recently you may have heard of them, since they are
                quite popular and good at what they do.
            </p>
            <p>
                I am talking about non other than
                <a href="https://unstract.com/" data-bold>unstract</a>. I tired
                setting it up locally but was not able to make it work and since
                it is opensourced and had some good metrics I tried the cloud
                version. Man I was impressed, it's a good idea isn't it? Taking
                your documents and performing OCR and giving the extracted data
                to an LLM to further process it. I singned up for the free trial
                of their cloud version. Went to prompt studio and created a
                prompt by attaching a document and wrote.
                <br />
                <code data-style="block">
                    Can you extract the name and phone numbers from this
                    document?
                    <br />
                    <br />
                    In the below mentioned format:
                    <br />
                    name:number
                </code>
                It took around 30-40 seconds and the results were just perfect. I
                did manually check some of the results from the middle they were
                just perfect. Not only that they also told me the token lenght and
                how much price it would take to run it?
            </p>
            <backquote>
                No this, is not a ads for unstract. It was my first time seeing
                the tools and it really got me impressed.
            </backquote>
            <p>
                <b>But,</b> As i scrolled passed the 150th result, the result
                ended there. And the last few numbers were wrong (classic LLM
                behavior, making fake facts and presenting proudly). Luckily,
                for me I had the ablity to tweak the prompt I copied all the
                correct data and then told it to generate only the missing ones.
                It was giving good data that was correct but for some reason the
                last page's data was not being generated correctly.

                <br />
                It made me question the entire data's reliablility. At that point
                I suddenly remembered
                <a href="https://ai.google.dev/competition"
                    >Google AI Competition.</a
                >
                why you may ask? Because it introduced me to google Ai studio. And
                I remembered it supporting images and documents and generating good
                response.
                <br />
                so, I gave it a shot. It generated the data perfectly and it also
                had a structured data option. Unlike unstract, it completly ignored
                my requested structure and gave complete table's data. It was a valid
                json response. so, It was fine for me. Sadly, enough it too got stuck
                at the 150th result. I was starting to get frustrated and was getting
                bored and said it to continue further.
                <br />
                <br />
                Funnily enought, It did. and got stuck at around 250th result, I
                said to move forward it did just that. It feels good when LLMs do
                what you want them to do.

                <br />
                It was a funny and interesting experience which taught me a thing
                or two and let me discovering some new tools.
            </p>

            <p>
                After collecting the data, I put it in a file as a `javascript`
                Made some changes to the code and called my friend to continue
                sending messages. I did not want to send it through my personal
                phone number. So, I told her to scan the QR code and link the
                her Whatsapp with my device with was about to run the playwright
                test.

                <br />
                <br />
                It worked flawlessly. Quickly in around 10 minutes, messages were
                sent. Response started coming saying thanks for sending a personal
                message. I was happy to see that it was working as expected.

                <br />
                She told her other friend who was also participating in the elections
                to scan the QR code as soon as they did the messages were being sent.
                The reaction was just priceless it felt like magic they said.
            </p>

            <p>
                Regardless, It was a fun experience. I would not have setup a
                blog if it weren't for the urge to share what it felt like. I
                mean automaticing some whatsapp messages is not that big of a
                deal.

                <b>
                    But, As developers we often overlook the fact that what we
                    do on a daily basis "may be beyond many peoples imagination
                    and list of possible things."
                </b>

                Often making the things that we think simple magical for others.
            </p>
        </div>
    </div>
</div>
