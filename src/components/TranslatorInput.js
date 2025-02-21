import copyImage from '../assets/Copy.svg';
import sound from '../assets/sound_max_fill.svg';
import sortAlfa from '../assets/Sort_alfa.svg';
import expandDown from '../assets/Expand_down.svg';

function TranslatorInput({
  translatorInput,
  setTranslatorInput,
  fromLang,
  setFromLang,
  onTextToSpeech,
}) {
  function handleSetLang(e) {
    const target = e.target.getAttribute('value');
    if (target) setFromLang(target);
  }

  return (
    <div className="translator-input br2">
      <div className="languages" onClick={handleSetLang}>
        <button className={`btn ${fromLang === 'en' ? 'active' : ''}`} value="en">
          English
        </button>
        <button className={`btn ${fromLang === 'fr' ? 'active' : ''}`} value="fr">
          French
        </button>
        <button className={`btn ${fromLang === 'es' ? 'active' : ''}`} value="es">
          Spanish
        </button>

        <img src={expandDown} alt="expand dwon" className="expand-down" />
      </div>
      <div className="line"></div>
      <div className="input-box">
        <textarea
          className="text-input"
          maxLength={500}
          value={translatorInput}
          onChange={(e) => setTranslatorInput(e.target.value)}
        />
        <span>{`${translatorInput.length}/500`}</span>
      </div>
      <div className="action-buttons">
        <button
          className="action-btn btn-hover"
          onClick={() => onTextToSpeech(fromLang, translatorInput)}
        >
          <img src={sound} alt="text to speech" />
        </button>
        <button
          className="action-btn btn-hover"
          onClick={() => {
            navigator.clipboard.writeText(translatorInput);
          }}
        >
          <img src={copyImage} alt="copy text" />
        </button>
        <button className="translate-btn btn-hover">
          <img src={sortAlfa} alt="sort alfa" />
          Translate
        </button>
      </div>
    </div>
  );
}

export default TranslatorInput;
