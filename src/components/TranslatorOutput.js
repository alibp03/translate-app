import copyImage from '../assets/Copy.svg';
import sound from '../assets/sound_max_fill.svg';
import swapLang from '../assets/Horizontal_top_left_main.svg';
import expandDown from '../assets/Expand_down.svg';

function TranslatorOutput({ translatorOutput, setToLang, toLang, handleSwap, onTextToSpeech }) {
  function handleSetLang(e) {
    const target = e.target.getAttribute('value');
    if (target) setToLang(target);
  }

  return (
    <div className="translator-output br2">
      <div className="languages" onClick={handleSetLang}>
        <button className={`btn ${toLang === 'en' ? 'active' : ''}`} value="en">
          English
        </button>
        <button className={`btn ${toLang === 'fr' ? 'active' : ''}`} value="fr">
          French
        </button>
        <button className={`btn ${toLang === 'es' ? 'active' : ''}`} value="es">
          Spanish
        </button>
        {/* <input type="button" value="English" className="btn" />
        <input type="button" value="French" className="btn active" />
        <input type="button" value="Spanish" className="btn" /> */}
        <img src={expandDown} alt="expand dwon" className="expand-down" />

        <button className="swap-btn btn-hover" onClick={() => handleSwap()}>
          <img src={swapLang} alt="swap languages button" />
        </button>
      </div>
      <div className="line"></div>
      <div className="input-box">
        <textarea
          className="text-input"
          maxLength={500}
          defaultValue={translatorOutput}
          disabled={true}
        />
      </div>
      <div className="action-buttons">
        <button
          className="action-btn btn-hover"
          onClick={() => onTextToSpeech(toLang, translatorOutput)}
        >
          <img src={sound} alt="text to speech" />
        </button>
        <button
          className="action-btn btn-hover"
          onClick={() => {
            navigator.clipboard.writeText(translatorOutput);
          }}
        >
          <img src={copyImage} alt="copy text" />
        </button>
      </div>
    </div>
  );
}

export default TranslatorOutput;
