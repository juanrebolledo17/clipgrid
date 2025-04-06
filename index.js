// document.addEventListener('DOMContentLoaded', function() {
//   const videoGrid = document.querySelector('.video-grid');
//   const backToTop = document.querySelector('.backToTop');
//   const endMessageContainer = document.querySelector('.end-message-container');
  
//   // Sample video data - in a real app, you'd fetch this from an API
//   const allVideos = [
//     {
//       "title": "Afterlife - Evanescence Devil May Cry",
//       "src": "https://bigwarp.io/embed-57zb19ea1rro.html",
//       "category": "Music"
//     },
//     {
//       "title": "Kate Upton Performs Britney Spears - Baby One More Time - Lip Sync Battle",
//       "src": "https://filemoon.sx/e/4zxkjecph929/Kate_Upton_Performs_Britney_Spears___Baby_One_More_Time____Lip_Sync_Battle",
//       "category": "Dance"
//     },
//     {
//       "title": "The Mandalorian Luke Hallway Scene Sync to I Need a Hero (Music Edit)",
//       "src": "https://filemoon.sx/e/nucc3bctjxk9/Luke_Hallway_Scene_Synced_to_I_Need_a_Hero__Music_Edit_",
//       "category": "TV Series"
//     },
//     {
//       "title": "Peacemaker Opening credits",
//       "src": "https://filemoon.sx/e/bjbt5d6ehtk8/Peacemaker___Opening_Credits___HBO_Max",
//       "category": "TV Series"
//     },
//     {
//       "title": "Into the Spider-Verse - Gwen and Miles Clip",
//       "src": "https://filemoon.sx/e/oqm31xltg08z/SPIDER-MAN_ACROSS_THE_SPIDER-VERSE_Clip_-_Gwen___Miles-720p",
//       "category": "Movie"
//     },
//     {
//       "title": "Slam Dunk Opening 2",
//       "src": "https://filemoon.sx/e/5oug4n7zrvm4/Slam_Dunk_Opening_2_480p",
//       "category": "Animated Series"
//     },
//     {
//       "title": "Stromae Pomme - Ma Meilleure Ennemie from Arcane Season 2",
//       "src": "https://filemoon.sx/e/x6jfpaqi1hmh/Stromae__Pomme_-_Ma_Meilleure_Ennemie__from_Arcane_Season_2_",
//       "category": "Animated Series"
//     },
//     {
//       "title": "Suits Opening",
//       "src": "https://filemoon.sx/e/4br70voeq6rv/Suits_-_Season_8_Official_Opening_Credits",
//       "category": "TV Series"
//     },
//     {
//       "title": "Superman and Lois Opening Credits Smallville Style",
//       "src": "https://filemoon.sx/e/zx3v5c4d9rik/SUPERMAN_AND_LOIS_-_OPENING_CREDITS_SMALLVILLE_STYLE_-_4K",
//       "category": "TV Series"
//     },
//     {
//       "title": "The Batman Deleted Arkham Scene",
//       "src": "https://filemoon.sx/e/qbqgwp3t24e0/The_Batman_Deleted_Arkham_Scene",
//       "category": "Movie"
//     },
//     {
//       "title": "The Battlefield - A Star Wars short film made with Unreal Engine 5",
//       "src": "https://filemoon.sx/e/j8sxuuycperw/THE_BATTLEFIELD_-_A_Star_Wars_short_film_made_with_Unreal_Engine_5",
//       "category": "Animated Short Film"
//     },
//     {
//       "title": "Thinking Out Loud - Ed Sheeran",
//       "src": "https://filemoon.sx/e/d3fe4ikxh6gy/Thinking_Out_Loud_-_Ed_Sheeran_Official_Music",
//       "category": "Music"
//     },
//     {
//       "title": "Shaman King Opening 1",
//       "src": "https://filemoon.sx/e/29q4gevhpsi6/TV_SHAMAN_KING_2021_4_1_",
//       "category": "Animated Series"
//     },
//     {
//       "title": "Shaman King Opening 2",
//       "src": "https://bigwarp.io/embed-3czx52oo267q.html",
//       "category": "Animated Series"
//     },
//     {
//       "title": "Zorro Amazon TV Series Opening",
//       "src": "https://filemoon.sx/e/toghvwl8lbnx/Zorro_Opening_2024_TV_Series",
//       "category": "TV Series"
//     },
//     {
//       "title": "Lauren Gibson Dances Because of You",
//       "src": "https://filemoon.sx/e/x2kofrjjxal1/Lauren-Gibson-333304958_1148506279449502_6462520936627668460_n",
//       "category": "Dance"
//     },
//     {
//       "title": "Sara Lopez Dances Kizomba",
//       "src": "https://filemoon.sx/e/d0ncs9rsue0v/Mais_Kizomba_-_Sara_Lopez___Barrio_Latino__online-video-cutter_com___1_",
//       "category": "Dance"
//     },
//     {
//       "title": "Ricky Martin Performs Footloose",
//       "src": "https://filemoon.sx/e/zvvzkt0q7gwl/Ricky_Martin_Performs_Kenny_Loggins___Footloose____Lip_Sync_Battle",
//       "category": "Dance"
//     }
//   ];

//   // Track loaded videos and total available
//   let loadedVideos = [];
//   let hasMoreVideos = true;
//   let endMessageCreated = false;
//   const batchSize = 6; // Number of videos to load at once

//   // Function to create a video item
//   function createVideoItem(video) {
//     const videoItem = document.createElement('div');
//     videoItem.className = 'video-item';
//     videoItem.innerHTML = `
//       <iframe
//         width="100%"
//         height="315"
//         src="${video.src}"
//         title="${video.title}"
//         frameborder="0"
//         allowfullscreen
//         loading="lazy" // Add lazy loading
//       ></iframe>
//       <h3>${video.title}</h3>
//       <div class="video-category">
//         <p>${video.category}</p>
//       </div>
//     `;
//     return videoItem;
//   }

//   // Create end of content message
//   function createEndMessage() {
//     const endMessage = document.createElement('p');
//     endMessage.className = 'message-text';
//     endMessage.innerHTML = `
//       No more videos.
//     `;
//     return endMessage;
//   }

//   // Function to load more videos
//   function loadMoreVideos() {
//     if (!hasMoreVideos) return;
    
//     const loadingIndicator = document.querySelector('.loading-indicator');
//     const endMessage = document.querySelector('.end-message');
    
//     if (endMessage) endMessage.remove();
//     loadingIndicator.style.display = 'block';
    
//     // Simulate API delay (remove in production)
//     setTimeout(() => {
//       const remainingVideos = allVideos.filter(video => 
//         !loadedVideos.some(loaded => loaded.src === video.src)
//       );
      
//       if (remainingVideos.length === 0) {
//         hasMoreVideos = false;

//         if (!endMessageCreated) {
//           endMessageContainer.appendChild(createEndMessage());
//           endMessageCreated = true;
//         }

//         loadingIndicator.style.display = 'none';
//         return;
//       }
      
//       const videosToLoad = remainingVideos.slice(0, batchSize);
//       const fragment = document.createDocumentFragment();
      
//       videosToLoad.forEach(video => {
//         fragment.appendChild(createVideoItem(video));
//         loadedVideos.push(video);
//       });
      
//       videoGrid.appendChild(fragment);
//       loadingIndicator.style.display = 'none';
//     }, 800); // Simulated network delay
//   }

//   // Infinite scroll handler
//   function handleInfiniteScroll() {
//     const endOfPage = window.innerHeight + window.scrollY >= 
//                       document.body.offsetHeight - 500;
    
//     if (endOfPage && hasMoreVideos) {
//       loadMoreVideos();
//     }
//   }

  // Back to top button visibility
  // function handleScroll() {
  //   if (window.scrollY > 300) {
  //     backToTop.style.display = 'flex';
  //   } else {
  //     backToTop.style.display = 'none';
  //   }
  // }

//   // Throttle scroll events
//   function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;
//     return function() {
//       const context = this;
//       const args = arguments;
//       if (!lastRan) {
//         func.apply(context, args);
//         lastRan = Date.now();
//       } else {
//         clearTimeout(lastFunc);
//         lastFunc = setTimeout(function() {
//           if ((Date.now() - lastRan) >= limit) {
//             func.apply(context, args);
//             lastRan = Date.now();
//           }
//         }, limit - (Date.now() - lastRan));
//       }
//     }
//   }

//   // Event listeners
//   window.addEventListener('scroll', throttle(function() {
//     handleInfiniteScroll();
//     handleScroll();
//   }, 200));

//   // Initial load
//   loadMoreVideos();
//   loadMoreVideos(); // Load initial content
// });