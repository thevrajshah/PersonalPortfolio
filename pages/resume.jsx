import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  const downloadFile = (fileURL, fileName) => {
    // for non-IE
    if (!window.ActiveXObject) {
      var save = document.createElement('a');
      save.href = fileURL;
      save.target = '_blank';
      var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
      save.download = fileName || filename;
      if (
        navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
        navigator.userAgent.search('Chrome') < 0
      ) {
        document.location = save.href;
        // window event not working here
      } else {
        var evt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
      var _window = window.open(fileURL, '_blank');
      _window.document.close();
      _window.document.execCommand('SaveAs', true, fileName || fileURL);
      _window.close();
    }
  };
  return (
    <div id="resume">
      <button
        onClick={() => {
          downloadFile('/VrajShah_Resume.pdf', 'VrajShah_Resume');
        }}
        className="btn"
      >
        <FaDownload />
      </button>
      <iframe
        src="https://docs.google.com/gview?url=https://thevrajshah.pages.dev/resume.pdf&embedded=true"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          background: 'var(--bg1)',
        }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
