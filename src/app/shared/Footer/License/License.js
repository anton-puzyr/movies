import React from 'react';
import * as PropTypes from 'prop-types';

import './License.scss';

const { func, string } = PropTypes;

const License = () => {
  return (
    <div className="license">
      <p className="license__main-header">Copyright (c) 2019, Anton Puzyr</p>
      <p className="license__paragraph">
        Permission to use, copy, modify, and/or distribute this software for any purpose with or
        without fee is hereby granted, provided that the above copyright notice and this permission
        notice appear in all copies.
      </p>
      <p className="license__paragraph">
        THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN
        NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
        DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
        ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION
        WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
      </p>
    </div>
  );
};

License.propTypes = {
  Footer: func,
  className: string,
};

export default License;
