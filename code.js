function _(query){
	return document.querySelector(query);
}

function _all(query){
	return document.querySelectorAll(query);
}


function loadJSON (callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'songlist.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback 
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init (){    
    loadJSON((response) => {
        // Parse JSON string into object
        let songListJson = JSON.parse(response);  
        songList1.push(songListJson);             
    });     
}


let songList = [
    {        
        thumbnail:"1014294_univ_sqs_lg.jpg",
        audio:"osg_E_001.mp3",
        songname:"The Best Life Ever",
        artistname:"WatchTower",
        album:"Original Songs"
    },
    {
        "thumbnail":"1014296_univ_sqs_lg.jpg",
        "audio":"osg_E_002.mp3",
        "songname":"We Won't Forget You",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014316_univ_sqs_lg.jpg",
        "audio":"osg_E_003.mp3",
        "songname":"If You Could See What I See",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014290_univ_sqs_lg.jpg",
        "audio":"osg_E_004.mp3",
        "songname":"What Means the Most to Me",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014288_univ_sqs_lg.jpg",
        "audio":"osg_E_005.mp3",
        "songname":"Never Give Up",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014300_univ_sqs_lg.jpg",
        "audio":"osg_E_006.mp3",
        "songname":"Honor Jehovah With Your Valuable Things",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014284_univ_sqs_lg.jpg",
        "audio":"osg_E_007.mp3",
        "songname":"Give You My All",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014280_univ_sqs_lg.jpg",
        "audio":"osg_E_008.mp3",
        "songname":"Glad I Passed the Test",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014302_univ_sqs_lg.jpg",
        "audio":"osg_E_009.mp3",
        "songname":"Now Is the Time",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014282_univ_sqs_lg.jpg",
        "audio":"osg_E_010.mp3",
        "songname":"Just a Smile",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014278_univ_sqs_lg.jpg",
        "audio":"osg_E_011.mp3",
        "songname":"Finding Treasures",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },    
    {
        "thumbnail":"1014292_univ_sqs_lg.jpg",
        "audio":"osg_E_012.mp3",
        "songname":"Jehovah Welcomes You Home",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014274_univ_sqs_lg.jpg",
        "audio":"osg_E_013.mp3",
        "songname":"Joy of Conventions",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014276_univ_sqs_lg.jpg",
        "audio":"osg_E_014.mp3",
        "songname":"I Give You My Best",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014286_univ_sqs_lg.jpg",
        "audio":"osg_E_015.mp3",
        "songname":"Take Your Time Choose Wisely",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014272_univ_sqs_lg.jpg",
        "audio":"osg_E_016.mp3",
        "songname":"Image the Time",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014267_univ_sqs_lg.jpg",
        "audio":"osg_E_017.mp3",
        "songname":"Keep the Pace",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014263_univ_sqs_lg.jpg",
        "audio":"osg_E_018.mp3",
        "songname":"Blessings of Learning",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014265_univ_sqs_lg.jpg",
        "audio":"osg_E_019.mp3",
        "songname":"Don't Run So Fast",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014256_univ_sqs_lg.jpg",
        "audio":"osg_E_020.mp3",
        "songname":"Follow the Coure of Hospitality",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014244_univ_sqs_lg.jpg",
        "audio":"osg_E_021.mp3",
        "songname":"Our Thanks Go to You",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014238_univ_sqs_lg.jpg",
        "audio":"osg_E_022.mp3",
        "songname":"Where I Belong",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014240_univ_sqs_lg.jpg",
        "audio":"osg_E_023.mp3",
        "songname":"Choices",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014223_univ_sqs_lg.jpg",
        "audio":"osg_E_024.mp3",
        "songname":"Forgive One Another",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014225_univ_sqs_lg.jpg",
        "audio":"osg_E_025.mp3",
        "songname":"Just Around the Corner",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014229_univ_sqs_lg.jpg",
        "audio":"osg_E_026.mp3",
        "songname":"Study Makes You Strong",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014226_univ_sqs_lg.jpg",
        "audio":"osg_E_027.mp3",
        "songname":"Your Word Endures Forever",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014214_univ_sqs_lg.jpg",
        "audio":"osg_E_028.mp3",
        "songname":"Stop, Think, and Pray",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014215_univ_sqs_lg.jpg",
        "audio":"osg_E_029.mp3",
        "songname":"Building My Future With Jehovah",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014227_univ_sqs_lg.jpg",
        "audio":"osg_E_030.mp3",
        "songname":"Faith Can Makes Things Happen",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014216_univ_sqs_lg.jpg",
        "audio":"osg_E_031.mp3",
        "songname":"I Keep Your Reminders",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014217_univ_sqs_lg.jpg",
        "audio":"osg_E_032.mp3",
        "songname":"I Can Get Back Up",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014218_univ_sqs_lg.jpg",
        "audio":"osg_E_033.mp3",
        "songname":"We Marvel at Your Work",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014220_univ_sqs_lg.jpg",
        "audio":"osg_E_034.mp3",
        "songname":"Precious Daughter",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014219_univ_sqs_lg.jpg",
        "audio":"osg_E_035.mp3",
        "songname":"Let's Take the Leap",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014232_univ_sqs_lg.jpg",
        "audio":"osg_E_036.mp3",
        "songname":"Look at Me",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014231_univ_sqs_lg.jpg",
        "audio":"osg_E_037.mp3",
        "songname":"Inspired by Your Wonders",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014242_univ_sqs_lg.jpg",
        "audio":"osg_E_038.mp3",
        "songname":"Important Things",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014234_univ_sqs_lg.jpg",
        "audio":"osg_E_039.mp3",
        "songname":"Truly in Love",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014236_univ_sqs_lg.jpg",
        "audio":"osg_E_040.mp3",
        "songname":"A Place That Will Bring You Praise",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },    
    {
        "thumbnail":"1014246_univ_sqs_lg.jpg",
        "audio":"osg_E_041.mp3",
        "songname":"Confident in You",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014248_univ_sqs_lg.jpg",
        "audio":"osg_E_042.mp3",
        "songname":"I'm Making a Change",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },    
    {
        "thumbnail":"1014250_univ_sqs_lg.jpg",
        "audio":"osg_E_043.mp3",
        "songname":"Never Alone",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },             
    {
        "thumbnail":"1014254_univ_sqs_lg.jpg",
        "audio":"osg_E_044.mp3",
        "songname":"Brotherly Love",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014252_univ_sqs_lg.jpg",
        "audio":"osg_E_045.mp3",
        "songname":"Do Not Be Afraid",
        "artistname":"WatchTower",
        "album":"Original Songs"
    }, 
    {
        "thumbnail":"1014258_univ_sqs_lg.jpg",
        "audio":"osg_E_046.mp3",
        "songname":"The Search",
        "artistname":"WatchTower",
        "album":"Original Songs"
    }, 
    {
        "thumbnail":"1014260_univ_sqs_lg.jpg",
        "audio":"osg_E_047.mp3",
        "songname":"True Friends",
        "artistname":"WatchTower",
        "album":"Original Songs"
    }, 
    {
        "thumbnail":"1014304_univ_sqs_lg.jpg",
        "audio":"osg_E_048.mp3",
        "songname":"You Can Count on Me",
        "artistname":"WatchTower",
        "album":"Original Songs"
    }, 
    {
        "thumbnail":"1014298_univ_sqs_lg.jpg",
        "audio":"osg_E_049.mp3",
        "songname":"With Jehovah, We Are One",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014269_univ_sqs_lg.jpg",
        "audio":"osg_E_050.mp3",
        "songname":"Give Me Courage",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014306_univ_sqs_lg.jpg",
        "audio":"osg_E_051.mp3",
        "songname":"All I Can Give",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014309_univ_sqs_lg.jpg",
        "audio":"osg_E_052.mp3",
        "songname":"Each Day Has Its Own Anxieties",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014307_univ_sqs_lg.jpg",
        "audio":"osg_E_053.mp3",
        "songname":"Be Courageous and Strong",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014311_univ_sqs_lg.jpg",
        "audio":"osg_E_054.mp3",
        "songname":"Thankful Godd's Creation",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014313_univ_sqs_lg.jpg",
        "audio":"osg_E_055.mp3",
        "songname":"We're Your Family",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014318_univ_sqs_lg.jpg",
        "audio":"osg_E_056.mp3",
        "songname":"Fight the Fine Fight of the Faith",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014321_univ_sqs_lg.jpg",
        "audio":"osg_E_057.mp3",
        "songname":"Jehovah's Always by Our Side",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014323_univ_sqs_lg.jpg",
        "audio":"osg_E_058.mp3",
        "songname":"The New World to Come",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014324_univ_sqs_lg.jpg",
        "audio":"osg_E_059.mp3",
        "songname":"I Give My Life to You",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014320_univ_sqs_lg.jpg",
        "audio":"osg_E_060.mp3",
        "songname":"Unfailing Love",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014325_univ_sqs_lg.jpg",
        "audio":"osg_E_061.mp3",
        "songname":"Roll It on Him",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014327_univ_sqs_lg.jpg",
        "audio":"osg_E_062.mp3",
        "songname":"Just Like a Child",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014328_univ_sqs_lg.jpg",
        "audio":"osg_E_063.mp3",
        "songname":"Please Be Convinced",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014337_univ_sqs_lg.jpg",
        "audio":"osg_E_064.mp3",
        "songname":"Forgive Freely",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },
    {
        "thumbnail":"1014326_univ_sqs_lg.jpg",
        "audio":"osg_E_065 (1).mp3",
        "songname":"Run the Race",
        "artistname":"WatchTower",
        "album":"Original Songs"
    },    
    {
        "thumbnail":"1014339_univ_sqs_lg.jpg",
        "audio":"osg_E_072.mp3",
        "songname":"Our Joy Eternally",
        "artistname":"WatchTower",
        "album":"Original Songs"
    }
];


let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
				<img src="./img/${song.thumbnail}">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
    
    let song = songList[songIndex]; 
	main.thumbnail.setAttribute("src","./img/"+ song.thumbnail);
	document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("./img/${song.thumbnail}") center no-repeat`;
	document.body.style.backgroundSize = "cover";	
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src","./audio/" + song.audio);
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}

setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	currentSongIndex--;
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});

main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});

main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});

main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});


//let getSongList = init();
//songList.push(getSongList);
//console.log(songList);

loadSong(currentSongIndex);