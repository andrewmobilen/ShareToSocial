/* 
share2social
version 1.1.4 (14.05.2012)
Writed by Electric (http://www.maultalk.com/user15525.html)
*/

share2socialUrl = encodeURIComponent(location.href);
share2socialTitle = encodeURIComponent(document.title);

share2socialArray = {};

share2socialArray['blogger'] = {};
share2socialArray['blogger']['title'] = "Опубликовать в Blogger.com";
share2socialArray['blogger']['icon'] = "blogger.png"
share2socialArray['blogger']['url'] = "http://www.blogger.com/blog_this.pyra?t&u=SHARE_2_SOCIAL_URL&n=SHARE_2_SOCIAL_TITLE";
share2socialArray['blogger']['target'] = "_new";

share2socialArray['bobrdobr'] = {};
share2socialArray['bobrdobr']['title'] = "Забобрить";
share2socialArray['bobrdobr']['icon'] = "bobrdobr.png"
share2socialArray['bobrdobr']['url'] = "http://bobrdobr.ru/add.html?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['bobrdobr']['target'] = "_new";

share2socialArray['delicious'] = {};
share2socialArray['delicious']['title'] = "Сохранить закладку в Delicious";
share2socialArray['delicious']['icon'] = "delicious.png"
share2socialArray['delicious']['url'] = "http://delicious.com/save?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['delicious']['target'] = "_new";

share2socialArray['designbump'] = {};
share2socialArray['designbump']['title'] = "Bump it!";
share2socialArray['designbump']['icon'] = "designbump.png"
share2socialArray['designbump']['url'] = "http://designbump.com/node/add/drigg/?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['designbump']['target'] = "_new";

share2socialArray['designfloat'] = {};
share2socialArray['designfloat']['title'] = "Float it!";
share2socialArray['designfloat']['icon'] = "designfloat.png"
share2socialArray['designfloat']['url'] = "http://www.designfloat.com/submit.php?url=SHARE_2_SOCIAL_URL";
share2socialArray['designfloat']['target'] = "_new";

share2socialArray['digg'] = {};
share2socialArray['digg']['title'] = "Добавить в Digg";
share2socialArray['digg']['icon'] = "digg.png"
share2socialArray['digg']['url'] = "http://digg.com/submit?url=SHARE_2_SOCIAL_URL";
share2socialArray['digg']['target'] = "_new";

share2socialArray['evernote'] = {};
share2socialArray['evernote']['title'] = "Добавить в Evernote";
share2socialArray['evernote']['icon'] = "evernote.png"
share2socialArray['evernote']['url'] = "http://www.evernote.com/clip.action?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['evernote']['target'] = "_new";

share2socialArray['facebook'] = {};
share2socialArray['facebook']['title'] = "Поделиться в Facebook";
share2socialArray['facebook']['icon'] = "facebook.png"
share2socialArray['facebook']['url'] = "http://www.facebook.com/sharer.php?u=SHARE_2_SOCIAL_URL&t=SHARE_2_SOCIAL_TITLE";
share2socialArray['facebook']['target'] = "_new";

share2socialArray['friendfeed'] = {};
share2socialArray['friendfeed']['title'] = "Добавить в FriendFeed";
share2socialArray['friendfeed']['icon'] = "friendfeed.png"
share2socialArray['friendfeed']['url'] = "http://www.friendfeed.com/share?title=SHARE_2_SOCIAL_TITLE - SHARE_2_SOCIAL_URL";
share2socialArray['friendfeed']['target'] = "_new";

share2socialArray['googlebookmarks'] = {};
share2socialArray['googlebookmarks']['title'] = "Сохранить закладку в Google";
share2socialArray['googlebookmarks']['icon'] = "googlebookmarks.png"
share2socialArray['googlebookmarks']['url'] = "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['googlebookmarks']['target'] = "_new";

share2socialArray['googleplus'] = {};
share2socialArray['googleplus']['title'] = "Добавить +1 и поделиться в Google+";
share2socialArray['googleplus']['icon'] = "googleplus.png"
share2socialArray['googleplus']['url'] = "https://plusone.google.com/_/+1/confirm?hl=ru&url=SHARE_2_SOCIAL_URL";
share2socialArray['googleplus']['target'] = "_new";

share2socialArray['identi'] = {};
share2socialArray['identi']['title'] = "Добавить в Identi.ca";
share2socialArray['identi']['icon'] = "identi.png"
share2socialArray['identi']['url'] = "http://identi.ca/notice/new?status_textarea=SHARE_2_SOCIAL_TITLE - SHARE_2_SOCIAL_URL";
share2socialArray['identi']['target'] = "_new";

share2socialArray['juick'] = {};
share2socialArray['juick']['title'] = "Добавить в Juick";
share2socialArray['juick']['icon'] = "juick.png"
share2socialArray['juick']['url'] = "http://www.juick.com/post?body=SHARE_2_SOCIAL_TITLE - SHARE_2_SOCIAL_URL";
share2socialArray['juick']['target'] = "_new";

share2socialArray['linkedin'] = {};
share2socialArray['linkedin']['title'] = "Добавить в Linkedin";
share2socialArray['linkedin']['icon'] = "linkedin.png"
share2socialArray['linkedin']['url'] = "http://www.linkedin.com/shareArticle?mini=true&url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['linkedin']['target'] = "_new";

share2socialArray['liveinternet'] = {};
share2socialArray['liveinternet']['title'] = "Опубликовать в LiveInternet";
share2socialArray['liveinternet']['icon'] = "liveinternet.png"
share2socialArray['liveinternet']['url'] = "http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=SHARE_2_SOCIAL_URL&cntitle=SHARE_2_SOCIAL_TITLE";
share2socialArray['liveinternet']['target'] = "_new";

share2socialArray['livejournal'] = {};
share2socialArray['livejournal']['title'] = "Опубликовать в LiveJournal";
share2socialArray['livejournal']['icon'] = "livejournal.png"
share2socialArray['livejournal']['url'] = "http://www.livejournal.com/update.bml?event=SHARE_2_SOCIAL_URL&subject=SHARE_2_SOCIAL_TITLE";
share2socialArray['livejournal']['target'] = "_new";

share2socialArray['mailru'] = {};
share2socialArray['mailru']['title'] = "Поделиться в Моем Мире@Mail.Ru";
share2socialArray['mailru']['icon'] = "mailru.png"
share2socialArray['mailru']['url'] = "http://connect.mail.ru/share?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['mailru']['target'] = "_new";

share2socialArray['memori'] = {};
share2socialArray['memori']['title'] = "Сохранить закладку в Memori.ru";
share2socialArray['memori']['icon'] = "memori.png"
share2socialArray['memori']['url'] = "http://memori.ru/link/?sm=1&u_data[url]=SHARE_2_SOCIAL_URL&u_data[name]=SHARE_2_SOCIAL_TITLE";
share2socialArray['memori']['target'] = "_new";

share2socialArray['misterwong'] = {};
share2socialArray['misterwong']['title'] = "Сохранить закладку в Мистер Вонг";
share2socialArray['misterwong']['icon'] = "misterwong.png"
share2socialArray['misterwong']['url'] = "http://www.mister-wong.ru/index.php?action=addurl&bm_url=SHARE_2_SOCIAL_URL&bm_description=SHARE_2_SOCIAL_TITLE";
share2socialArray['misterwong']['target'] = "_new";

share2socialArray['mixx'] = {};
share2socialArray['mixx']['title'] = "Добавить в Mixx";
share2socialArray['mixx']['icon'] = "mixx.png"
share2socialArray['mixx']['url'] = "http://www.mixx.com/submit?page_url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['mixx']['target'] = "_new";

share2socialArray['moikrug'] = {};
share2socialArray['moikrug']['title'] = "Поделиться в Мой Круг";
share2socialArray['moikrug']['icon'] = "moikrug.png"
share2socialArray['moikrug']['url'] = "http://share.yandex.ru/go.xml?service=moikrug&url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['moikrug']['target'] = "_new";

share2socialArray['myspace'] = {};
share2socialArray['myspace']['title'] = "Добавить в MySpace";
share2socialArray['myspace']['icon'] = "myspace.png"
share2socialArray['myspace']['url'] = "http://www.myspace.com/Modules/PostTo/Pages/?u=SHARE_2_SOCIAL_URL&t=SHARE_2_SOCIAL_TITLE";
share2socialArray['myspace']['target'] = "_new";

share2socialArray['netvibes'] = {};
share2socialArray['netvibes']['title'] = "Добавить в Netvibes";
share2socialArray['netvibes']['icon'] = "netvibes.png"
share2socialArray['netvibes']['url'] = "http://www.netvibes.com/share?title=SHARE_2_SOCIAL_TITLE&url=SHARE_2_SOCIAL_URL";
share2socialArray['netvibes']['target'] = "_new";

share2socialArray['newsvine'] = {};
share2socialArray['newsvine']['title'] = "Добавить в Newsvine";
share2socialArray['newsvine']['icon'] = "newsvine.png"
share2socialArray['newsvine']['url'] = "http://www.newsvine.com/_tools/seed&save?u=SHARE_2_SOCIAL_URL&h=SHARE_2_SOCIAL_TITLE";
share2socialArray['newsvine']['target'] = "_new";

share2socialArray['odnoklassniki'] = {};
share2socialArray['odnoklassniki']['title'] = "Добавить в Одноклассники";
share2socialArray['odnoklassniki']['icon'] = "odnoklassniki.png"
share2socialArray['odnoklassniki']['url'] = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['odnoklassniki']['target'] = "_new";

share2socialArray['pikabu'] = {};
share2socialArray['pikabu']['title'] = "Добавить в Pikabu";
share2socialArray['pikabu']['icon'] = "pikabu.png"
share2socialArray['pikabu']['url'] = "http://pikabu.ru/add_story.php?story_url=SHARE_2_SOCIAL_URL";
share2socialArray['pikabu']['target'] = "_new";

share2socialArray['posterous'] = {};
share2socialArray['posterous']['title'] = "Добавить в Posterous";
share2socialArray['posterous']['icon'] = "posterous.png"
share2socialArray['posterous']['url'] = "http://posterous.com/share?linkto=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['posterous']['target'] = "_new";

share2socialArray['reddit'] = {};
share2socialArray['reddit']['title'] = "Добавить в Reddit";
share2socialArray['reddit']['icon'] = "reddit.png"
share2socialArray['reddit']['url'] = "http://reddit.com/submit?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['reddit']['target'] = "_new";

share2socialArray['rutvit'] = {};
share2socialArray['rutvit']['title'] = "Добавить в РуТвит";
share2socialArray['rutvit']['icon'] = "rutvit.png"
share2socialArray['rutvit']['url'] = "http://rutvit.ru/tools/widgets/share/popup?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['rutvit']['target'] = "_new";

share2socialArray['stumbleupon'] = {};
share2socialArray['stumbleupon']['title'] = "Добавить в StumbleUpon";
share2socialArray['stumbleupon']['icon'] = "stumbleupon.png"
share2socialArray['stumbleupon']['url'] = "http://www.stumbleupon.com/submit?url=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['stumbleupon']['target'] = "_new";

share2socialArray['surfingbird'] = {};
share2socialArray['surfingbird']['title'] = "Добавить в Surfingbird";
share2socialArray['surfingbird']['icon'] = "surfingbird.png"
share2socialArray['surfingbird']['url'] = "http://surfingbird.ru/share?url=SHARE_2_SOCIAL_URL";
share2socialArray['surfingbird']['target'] = "_new";

share2socialArray['technorati'] = {};
share2socialArray['technorati']['title'] = "Добавить в Technorati";
share2socialArray['technorati']['icon'] = "technorati.png"
share2socialArray['technorati']['url'] = "http://technorati.com/faves?add=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['technorati']['target'] = "_new";

share2socialArray['tumblr'] = {};
share2socialArray['tumblr']['title'] = "Добавить в Tumblr";
share2socialArray['tumblr']['icon'] = "tumblr.png"
share2socialArray['tumblr']['url'] = "http://www.tumblr.com/share?v=3&u=SHARE_2_SOCIAL_URL&t=SHARE_2_SOCIAL_TITLE";
share2socialArray['tumblr']['target'] = "_new";

share2socialArray['twitter'] = {};
share2socialArray['twitter']['title'] = "Добавить в Twitter";
share2socialArray['twitter']['icon'] = "twitter.png"
share2socialArray['twitter']['url'] = "http://twitter.com/share?text=SHARE_2_SOCIAL_TITLE&url=SHARE_2_SOCIAL_URL";
share2socialArray['twitter']['target'] = "_new";

share2socialArray['vkontakte'] = {};
share2socialArray['vkontakte']['title'] = "Поделиться В Контакте";
share2socialArray['vkontakte']['icon'] = "vkontakte.png"
share2socialArray['vkontakte']['url'] = "http://vk.com/share.php?url=SHARE_2_SOCIAL_URL";
share2socialArray['vkontakte']['target'] = "_new";

share2socialArray['webdiscover'] = {};
share2socialArray['webdiscover']['title'] = "Опубликовать на WebDiscover.ru";
share2socialArray['webdiscover']['icon'] = "webdiscover.png"
share2socialArray['webdiscover']['url'] = "http://webdiscover.ru/share.php?url=SHARE_2_SOCIAL_URL";
share2socialArray['webdiscover']['target'] = "_new";

share2socialArray['yahoobookmarks'] = {};
share2socialArray['yahoobookmarks']['title'] = "Добавить в Yahoo! Закладки";
share2socialArray['yahoobookmarks']['icon'] = "yahoobookmarks.png"
share2socialArray['yahoobookmarks']['url'] = "http://bookmarks.yahoo.com/toolbar/savebm?u=SHARE_2_SOCIAL_URL&t=SHARE_2_SOCIAL_TITLE";
share2socialArray['yahoobookmarks']['target'] = "_new";

share2socialArray['yandex'] = {};
share2socialArray['yandex']['title'] = "Добавить в Яндекс.Закладки";
share2socialArray['yandex']['icon'] = "yandex.png"
share2socialArray['yandex']['url'] = "http://zakladki.yandex.ru/newlink.xml?url=SHARE_2_SOCIAL_URL&name=SHARE_2_SOCIAL_TITLE";
share2socialArray['yandex']['target'] = "_new";

share2socialArray['yaru'] = {};
share2socialArray['yaru']['title'] = "Поделиться в Я.ру";
share2socialArray['yaru']['icon'] = "yaru.png"
share2socialArray['yaru']['url'] = "http://my.ya.ru/posts_add_link.xml?URL=SHARE_2_SOCIAL_URL&title=SHARE_2_SOCIAL_TITLE";
share2socialArray['yaru']['target'] = "_new";

share2socialArray['yosmi'] = {};
share2socialArray['yosmi']['title'] = "Добавить в ёСМИ";
share2socialArray['yosmi']['icon'] = "yosmi.png"
share2socialArray['yosmi']['url'] = "http://yosmi.ru/index.php?do=share&url=SHARE_2_SOCIAL_URL";
share2socialArray['yosmi']['target'] = "_new";

function share2socialShow(share2socialListString, share2socialImagesFolder, share2socialImagesSize, share2socialGroupImages, share2socialID, share2socialCustomUrl, share2socialCustomTitle)
{
	var share2socialDiv = document.getElementById(share2socialID);
	if(share2socialDiv!=-1)
	{
		var share2socialList = new Array();
		var share2socialHTML = "";
		var share2socialGroupCounter = 0;

		share2socialCustomUrl = encodeURIComponent(share2socialCustomUrl);
		share2socialCustomTitle = encodeURIComponent(share2socialCustomTitle);

		share2socialList = share2socialListString.split("|");
		for(j=0;j<share2socialList.length;j++)
		{
			if (share2socialArray[share2socialList[j]] != undefined)
			{

				var share2socialAnchorUrl = share2socialArray[share2socialList[j]]['url'];
				if (share2socialCustomUrl!="")
				{
					share2socialAnchorUrl = share2socialAnchorUrl.replace("SHARE_2_SOCIAL_URL", share2socialCustomUrl);
				}
				else
				{
					share2socialAnchorUrl = share2socialAnchorUrl.replace("SHARE_2_SOCIAL_URL", share2socialUrl);
				}
				if (share2socialCustomTitle!="")
				{
					share2socialAnchorUrl = share2socialAnchorUrl.replace("SHARE_2_SOCIAL_TITLE", share2socialCustomTitle);
				}
				else
				{
					share2socialAnchorUrl = share2socialAnchorUrl.replace("SHARE_2_SOCIAL_TITLE", share2socialTitle);
				}
				if (share2socialArray[share2socialList[j]]['target'] != "_blank")
				{
					share2socialAnchorUrl = '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:'+share2socialImagesSize+'px;height:'+share2socialImagesSize+'px;margin:0 6px 6px 0;outline:none;background:url('+share2socialImagesFolder+''+share2socialImagesSize+'x'+share2socialImagesSize+'/'+share2socialArray[share2socialList[j]]['icon']+')" href="#" onclick="window.open(\''+share2socialAnchorUrl+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=200, top=200, width=640, height=480, toolbar=0, status=0\');return false" title="'+share2socialArray[share2socialList[j]]['title']+'" target="_blank"></a>';
				}
				else
				{
					share2socialAnchorUrl = '<a rel="nofollow" style="display:inline-block;vertical-align:bottom;width:'+share2socialImagesSize+'px;height:'+share2socialImagesSize+'px;margin:0 6px 6px 0;outline:none;background:url('+share2socialImagesFolder+share2socialArray[share2socialList[j]]['icon']+')" href="'+share2socialAnchorUrl+'" title="'+share2socialArray[share2socialList[j]]['title']+'" target="_blank"></a>';
				}
				share2socialHTML += share2socialAnchorUrl;
				share2socialGroupCounter ++;
				if (share2socialGroupCounter == share2socialGroupImages)
				{
					share2socialGroupCounter = 0;
					share2socialHTML += "<br />";
				}
			}		
		}
		share2socialDiv.innerHTML = '<span id="share2social"><noindex><center>'+share2socialHTML+'</center></noindex></span>';
	}
}
