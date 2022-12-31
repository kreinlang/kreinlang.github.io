let sides = document.getElementById('sides');
let page = document.getElementById('page');
let off = [true, true];

function NavBar(){
	page.innerHTML += `
		<div class="flex-md d-none justify-end more">
			<p id="more">
				<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="#ffffff" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" class="w-6 h-6">
					 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
				</svg>
			</p>
		</div>
		<nav class="flex flex-wrap-md px-7 px-2-md align-items-center justify-between">
			<div class="flex col-10-md align-items-center justify-between py-3">
				<a href="index.html"><p class="title">rain</p></a>
				<p class="px-2 nav-toggle d-none d-block-md text-xl-2"><i class="fas fa-bars"></i></p>
			</div>
			<div class="flex d-none-md toggled flex-wrap-md col-10-md align-items-center justify-center">
				<a class="col-10-md" href="getstarted.html"><p class="px-3 px-0-md py-2 py-2-md">Documentation</p></a>
				<a class="col-10-md" href="download.html"><p class="px-3 px-0-md py-2 py-2-md">Install</p></a>
				<a class="col-10-md"><p class="px-3 px-0-md py-2 py-2-md">Blog</p></a>
				<a class="col-10-md" href="examples.html"><p class="px-3 px-0-md py-2 py-2-md">Examples</p></a>
				<a class="col-10-md" href="forum.html"><p class="px-3 px-0-md py-2 py-2-md">Forum</p></a>
			</div>
		</nav>
	`;

	let togz = document.getElementsByClassName('nav-toggle')[0];
	let toz = document.getElementsByClassName('toggled')[0];
	let sd = document.getElementsByClassName('sidebar')[0];

	let more = document.getElementById('more');

	togz.addEventListener('click', () => {
		if (off[0]) {
			toz.classList.remove('d-none-md');
			off[0] = false;
		} else {
			toz.classList.add('d-none-md');
			off[0] = true;
		}
	});

	more.addEventListener('click', () => {
		if (off[1]) {
			sd.classList.add('col-10-sm');
			sd.classList.remove('d-none-sm');
			off[1] = false;
		} else {
			sd.classList.add('d-none-sm');
			sd.classList.remove('col-10-sm');
			off[1] = true;
		}
	});


}




function lazy(){
	sides.innerHTML = `
			<div class="py-2">
					<p class=""></p>
					<a href="getstarted.html"><p class="collapse pl-3 n nn">Get started</p></a>

					<ul>
						<a href="download.html"><li class="n pl-3 nn">Installation</li></a>
					</ul>

					<ul>
						<a href="fund.html"><li class="n nn"><svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
						</svg>
						</span> Fundamentals</li></a>
						<ul class="list-none ml-2 sect">
							<a href="fund.html#data"><li class="n pl-4">Datatypes</li></a>
							<a href="fund.html#var"><li class="n pl-4">Variables</li></a>
							<a href="fund.html#fn"><li class="n pl-4">Functions</li></a>
							<a href="fund.html#obj"><li class="n pl-4">Objects</li></a>
							<a href="fund.html#if"><li class="n pl-4">If statements</li></a>
							<a href="fund.html#imp"><li class="n pl-4">Import</li></a>
							<a href="fund.html#sw"><li class="n pl-4">Switch</li></a>
							<a href="fund.html#try"><li class="n pl-4">Try</li></a>
							<a href="fund.html#wl"><li class="n pl-4">While Loop</li></a>
							<a href="fund.html#fl"><li class="n pl-4">For</li></a>
						</ul>
					</ul>

					<ul>
						<a href="modules.html"><li class="n nn"><svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
						</svg>
						</span> Modules</li></a>
						<ul class="list-none ml-2 sect">
							<a href="time.html"><li class="n pl-4">Time</li></a>
							<a href="math.html"><li class="n pl-4">Math</li></a>
							<a href="socket.html"><li class="n pl-4">Socket</li></a>
							<a href="random.html"><li class="n pl-4">Random</li></a>
							<a href="json.html"><li class="n pl-4">Json</li></a>
							<a href="base64.html"><li class="n pl-4">Base64</li></a>
							<a href="console.html"><li class="n pl-4">Console</li></a>
						</ul>
					</ul>

					<p class="mb-15"></p>
				</div>
				`
}

setTimeout(lazy, 100);
setTimeout(NavBar, 100);
