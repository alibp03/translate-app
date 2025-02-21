import { useEffect, useState } from 'react';
import TranslatorInput from './TranslatorInput';
import TranslatorOutput from './TranslatorOutput';

function Main() {
  const [translatorInput, setTranslatorInput] = useState('Hello, how are you?');
  const [translatorOutput, setTranslatorOutput] = useState('');

  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('fr');

  function handleSwap() {
    const temp = fromLang;
    setFromLang(toLang);
    setToLang(temp);
  }

  function handleTextToSpeech(speechLang, speechText) {
    const speech = new SpeechSynthesisUtterance(speechText);
    speech.lang = speechLang;
    window.speechSynthesis.speak(speech);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function getTranslate() {
        try {
          const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${translatorInput.replaceAll(
              '\n',
              ' '
            )}&langpair=${fromLang}|${toLang}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          const translated =
            data.responseStatus === '403' ? translatorInput : data.responseData.translatedText;
          setTranslatorOutput(translated);
        } catch (err) {
          console.log(err.message);
        }
      }

      if (translatorInput.length > 0) getTranslate();

      return function () {
        controller.abort();
      };
    },
    [translatorInput, fromLang, toLang]
  );

  useEffect(
    function () {
      if (!translatorInput) setTranslatorOutput('');
    },
    [translatorInput]
  );

  return (
    <section className="traslator-section">
      <TranslatorInput
        translatorInput={translatorInput}
        setTranslatorInput={setTranslatorInput}
        setFromLang={setFromLang}
        fromLang={fromLang}
        onTextToSpeech={handleTextToSpeech}
      />
      <TranslatorOutput
        translatorOutput={translatorOutput}
        setToLang={setToLang}
        toLang={toLang}
        handleSwap={handleSwap}
        onTextToSpeech={handleTextToSpeech}
      />
    </section>
  );
}

export default Main;
