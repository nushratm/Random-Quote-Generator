var generate =["“Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer.” – Miss Kobayashi", "“How can you move forward when you keep regretting the past?” – Fullmetal Alchemist", "“Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!” – Shintaro Midorima", "“It may be hard right now but you must silent those thoughts. Stop counting those things you have lost, what is gone is gone. So ask yourself, what is there that still remains to you.” – One Piece", "“We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.” – Hitsugaya Toshiro", "“If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.” – Alibaba Saluja", "“Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.” – Kenshin Himura"];


   
$(".generate").click(function() {
	var random = Math.floor(Math.random('.generate') * generate.length);
    $('.generate-quote').text(generate[random]);

});