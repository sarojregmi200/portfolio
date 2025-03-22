<div class="content w-full max-w-3xl flex gap-20 flex-col mb-50">
    <div
        class="top_header flex flex-col gap-2.5 mt-20 items-center justify-center"
    >
        <header>I Automated 300+ Whatsapp Messages for a friend.</header>
        <p>
            I mean automating couple of hundreds of messages is not that big of
            a deal. But I was curious to see how it goes. Regardless it was a
            decent learning experience. That taught me many things.
        </p>
    </div>

    <div class="article-body flex flex-col gap-10">
        <div class="chunk flex flex-col gap-2.5">
            <h3 id="background">Background, what and why?</h3>
            <p>
                I one day received a request from a friend asking me to help
                them send 350+ messages individually in whatsapp. I without
                having a second thought said yes and starting working on this
                seemingly simple task. That is where the journey began.
            </p>

            <backquote>
                I never planned to release this blog in the first place. I did
                encounter some new and interesting finding which I wanted to
                share. I tried sharing in Linkedin but quickly hit the
                <code>max message</code> limit. So, after asking and thinking about
                the pro plan. I came to conclusion setting a blog is a good idea.
            </backquote>
        </div>

        <div class="chunk flex flex-col gap-2.5">
            <h3>Tools and Technologies that I used</h3>
            <p>
                I have actually open sourced the code on github. If you are
                curious then you can check it here.

                <a
                    href="https://github.com/sarojregmi200/wp-automation"
                    data-bold
                >
                    Repo Link
                </a>
            </p>

            <p>
                After understanding the problem, I begain thinking about the
                solutions that would:
            </p>

            <ol start="1">
                <li>
                    Work flawlessly, since I had to send only a single message
                    to individual numbers who may or may be not connected to my
                    friend.
                </li>
                <li>
                    Work automatically, with minimal to no human intervention.
                </li>
                <li>
                    Was doable within a day, since we usually have a single day
                    weekend in our country.
                </li>
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
            </p>
        </div>
    </div>
</div>
