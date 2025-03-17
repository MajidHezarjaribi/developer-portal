import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ChatPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { query } = router.query;

    if (typeof window !== 'undefined') {

      window.DocsBotAI = window.DocsBotAI || {};
      window.DocsBotAI.init = function (e) {
        return new Promise((t, r) => {
          var n = document.createElement("script");
          n.type = "text/javascript", n.async = !0, n.src = "https://widget.docsbot.ai/chat.js";
          let o = document.getElementsByTagName("script")[0]; o.parentNode.insertBefore(n, o), n.addEventListener("load", () => {
            let n; Promise.all([new Promise((t, r) => { window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r) }), (n = function e(t) { return new Promise(e => { if (document.querySelector(t)) return e(document.querySelector(t)); let r = new MutationObserver(n => { if (document.querySelector(t)) return e(document.querySelector(t)), r.disconnect() }); r.observe(document.body, { childList: !0, subtree: !0 }) }) })("#docsbotai-root"),]).then(() => t()).catch(r) }), n.addEventListener("error", e => { r(e.message) })
        })
      };

      DocsBotAI.init({
        id: 'y6yhkqNYg3oA2868fs0k/2c8nTqVZnzyql7x9pFCC',
        options: {
          hideHeader: true,
        },
      }).then(() => {
        console.log("DocsBot loaded");
        if (query) {
          const input = document.querySelector('.docsbot-chat-input'); 
          if (input) {
            input.value = query;
          }
        }
      });
    }
  }, [router.query]);

  return (
    <>
      <div id="docsbot-widget-embed" style={{ maxWidth: '100%', height: '80vh', margin: '20px auto' }}></div>
    </>
  );
};

export default ChatPage;
