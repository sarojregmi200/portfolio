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

<article class="w-full py-10 px-5 sm:p-10 h-screen">
	<div class="flex justify-center items-center h-auto">
		<div class="content w-full max-w-3xl flex gap-20 flex-col mb-50">
			<div class="top_header flex flex-col gap-2.5 mt-20">
				<header>I Automated 350+ Whatsapp Messages.</header>
				<p>
					I mean automating couple of hundreds of messages is not that big of a deal. But I was
					curious to see how it goes. Regardless it was a decent learning experience. That taught me
					many things.
				</p>

				<p>Wed, Mar 26 2025</p>
			</div>

			<div class="article-body flex flex-col gap-10">
				<div class="chunk flex flex-col gap-2.5">
					<h3 id="background">Background, what and why?</h3>
					<p>
						I one day received a request from a friend asking me to help her send 350+ whatsapp
						messages individually. For an upcoming student election promotion. I without having a
						second thought said yes and starting working on this <b>seemingly simple</b> task. This is
						where a journey full of excitement and frustration began. It had to be done within two days,
						from friday evening to saturday till night 12:00am. since all promotions after saturday were
						prohibited.
					</p>

					<backquote>
						I always wanted to have a personal blog but did not have time to code one.
						Unfortunately, this time when I wanted to share my experience I got slapped by <b>
							you exceeded max character limit message
						</b>
						in linkedin. And after searching for solutions, thinking of getting a premium (trail that
						is) and talking to one of my friends. I decided to invest some time and setup a blog and
						properly documenting this experience.
						<br />
						I have actually open sourced the code for this blog and the project. If you are curious then
						you can check it out here.

						<a href="https://github.com/sarojregmi200/wp-automation" data-bold> Project </a>,

						<a href="https://github.com/sarojregmi200/portfolio" data-bold> Blog </a>
					</backquote>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>What did i use?</h3>
					<p>
						After understanding the problem, I began thinking about the possible solutions that
						would:
					</p>

					<ol start="1">
						<li>
							Work flawlessly, since I had to send only a single message to individual phone numbers
							who may or maynot be connected to my friend.
						</li>
						<li>Work automatically, with minimal to no human intervention.</li>
						<li>Was doable within 1.25~ days (an evening and a day).</li>
					</ol>

					<br />
					<br />

					<p>
						With all these requirements in mind, I remembered that there was a tool that I was
						familiar with, but it was not a tool specifically made for this task "only". Although in
						theory it could be used for automating tasks. It was designed as a testing tool for the
						web. To perform integration and E2E testings.
						<br />
						You may have guessed it by now. It's non other than

						<a href="https://playwright.dev/" data-bold> Playwright. </a>

						<br />
						<br />
						While looking it from a different angle, it had a slight advantage over other tools. The
						advantage being "their
						<a href="https://playwright.dev/docs/codegen" data-bold> codegen </a> tool is pretty amazing".
						Besides I wanted to test the tool itself (talk about having a good option).
					</p>

					<p>
						With that taken care of, I quickly began setting up Playwright and the things that were
						needed to launch their codegen tool. This is where the luck runs out. All the time
						advantage that the codegen tool would have given me was taken by the same tool.
					</p>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>The issue with the tool I chose.</h3>
					<p>
						Good place to start right? As programmers it's always the case. Regardless here is the
						what happended. I got greeted with a friendly warning saying.
					</p>
					<code data-style="block">
						BEWARE: your OS is not officially supported by Playwright; installing dependencies for
						ubuntu20.04-x64 as a fallback.
					</code>
					<p>
						What a great time to say that <b>I use arch by the way.</b>
					</p>
					<p>
						It was just a warning or so I thought I got hit with a missing dependency error. I
						checked the
						<a href="https://aur.archlinux.org/" data-bold> aur </a> for those dependencies and found
						some but for some dependencies it was hard to find. And those which I found were broken or
						required manual interventions. So, after trying to find and fix them for a while, I gave
						up.
					</p>

					<p>
						But something within me was not ready to accept defeat. So, I touched some grass,
						streched my fingers and typed
						<code> yay -Syu </code>. And patiently waited for half an hour or so (yeah I actually
						kindof did it).
					</p>

					<p>
						After that I tried it again followed every instruction that I could find on this topic.
						First I found a
						<a
							href="https://www.reddit.com/r/linux4noobs/comments/rp76h1/how_can_i_do_playwright_installdeps_on_arch_linux/"
						>
							reddit thread
						</a>
						which lead me to a couple of github issues.
						<a href="https://github.com/microsoft/playwright/issues/30393"> [1] </a>
						<a href="https://github.com/microsoft/playwright/issues/2621#issuecomment-931530175">
							[2]
						</a>
					</p>

					<p>
						At last I made it working partially. (I got the chrome instance working skipped others).
						Besides I was not trying to test the code that I was about to write. The test was the
						code that was going to do all the work.
					</p>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>Finally started to code.</h3>
					<p>
						After all this hassle, I was finally starting to code. It was getting late so i called
						it a day.
					</p>
					<p>
						The next day I went straight into coding. I had to complete it that day or else there
						was no point of doing it. Why? you may ask. Just go ahead and read the
						<a href="#background">background</a> more clearly.

						<br />
						<br />
						While this part was not complicated at all, I had fun doing it. Thinking i may require it
						in future. I tried to make it as modular and generic as I could have though of at that time.
						The code turned out to be ok. It was working fine. After informing my friend about it, I
						told her to send the phonenumbers and the message that was to be automated but man was I
						unprepared.
					</p>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>The twist.</h3>
					<p>
						The numbers were in a printed sheet of paper whose photo was taken from a mobile phone
						and converted into a pdf.(simply put, the "PDF" was just a collection pictures.)
					</p>
					<p>
						At first I thought let's just use
						<a href="https://lens.google/">google lense</a> to copy the mobile numbers but it turned
						out to be pretty unreliable. Some numbers were being recorgnized fine some were getting half
						recorgnized. Regardless I was unable to use it due to reliablility issues.
					</p>
					<p>
						So, I began searching a way to do this without potentially exposing those personal
						details of 350+ people. I tried using someone else's ocr script and got to same
						conclusion. It was half good and half bad.
					</p>
					<p>
						There was no way I could write my own OCR script since, I had only that day to complete
						the task. After searching for around couple of hours and testing different solutions. I
						came across a tool that amazed me. If you have been doing OCR recently you may have
						heard of them, since they are quite popular and good at what they do.
					</p>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>And the turn.</h3>

					<p>
						It's non other than
						<a href="https://unstract.com/" data-bold>unstract</a>. I tired setting it up locally
						but was not able to make it work and since it is opensourced and had some good metrics I
						tried the cloud version. Man was I impressed, it's a good idea isn't it?
					</p>
					<p>
						"Taking your documents and performing OCR and then giving the extracted data to a LLM to
						further process it".
					</p>
					<p>
						I singned up for the free trial of their cloud version. Went to their prompt studio and
						created a prompt by attaching a document and wrote.
						<br />
						<code data-style="block">
							Can you extract the name and phone numbers from this document?
							<br />
							<br />
							In the below mentioned format:
							<br />
							name:number
						</code>
						It took around 30-40 seconds and the results were just perfect. I did manually check some
						of the results randomly, they were just perfect. Not only that they also told me the token
						length and how much price it would take to run it?
					</p>

					<backquote>
						No this, is not a ads for unstract. It was my first time seeing the tools and it really
						got me impressed.
					</backquote>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>Nothings, Perfect.</h3>
					<p>
						<b>But,</b> As i scrolled passed the 150th result, the result ended there. And the last few
						numbers were wrong (classic LLM behavior, making fake facts and presenting them proudly).
					</p>
					<p>
						Luckily, for me I had the ablity to tweak the prompt I copied all the correct data and
						then told it to generate only the missing ones. It was giving good data that was correct
						but for some reason the last page's data was not being parsed correctly.
					</p>

					<p>It made me question entire data's reliablility.</p>

					<p>
						At that point I suddenly remembered
						<a href="https://ai.google.dev/competition">Google AI Competition.</a>
						why you may ask? Because it introduced me to
						<b>google Ai studio.</b> And I remembered it supporting images as well as documents while
						generating good response.
					</p>

					<p>
						So, I gave it a shot. It generated the data perfectly and it also had a structured data
						option. Unlike unstract, it completly ignored my requested structure and gave entire
						table's columns as JSON data. It was a valid json response. so, It was fine for me.
						Sadly, enough it too got stuck at the 150th result. I was starting to get frustrated and
						was getting bored and said it to continue further.
					</p>
					<p>
						Funnily enought, It did. and got stuck at around 250th result, I said to move forward it
						did just that. It feels good when LLMs do what you want them to do.
					</p>
					<p>
						It was a funny and interesting experience which taught me a thing or two and helped me
						discover some new tools.
					</p>

					<p>
						After collecting the data, I put it in a file. Made some changes to the code and called
						my friend to continue sending messages. (I did not want to send it through my personal
						phone number. So, I told her to scan the QR code and link her Whatsapp with my computer
						which was about to run the playwright test.)
					</p>
					<p>
						It worked flawlessly. Quickly in around 10 minutes, messages were sent. Response started
						coming saying thanks for sending a personal message. I was happy to see that it was
						working as expected.
					</p>
					<p>
						She told her other friend who was also participating in the elections to scan the QR
						code as soon as they did the messages were being sent. The other friend's reaction was
						just unexpectedly shocking like they say some magic trick.
					</p>
				</div>

				<div class="chunk flex flex-col gap-2.5">
					<h3>Conclusion.</h3>

					<p>
						Regardless, It was a fun experience. I would not have setup a blog if it weren't for the
						urge to share what it felt like. I mean automaticing some whatsapp messages is not that
						big of a deal.
					</p>
					<p>
						But, As developers we often overlook the fact that what we do on a daily basis may be
						beyond some peoples imagination and list of possible things. Often making the things
						that we think simple magical for others. Often making the things that we think simple
						magical for others.
					</p>

					<p>
						<b> Thank you, for making it this far. It means alot. </b> For those who made it this far
						I am planning something.
					</p>
				</div>
			</div>
		</div>
	</div>
</article>

<style>
	@reference "../../app.css";
	@import '../../blog.css';
</style>
