/* ------------------------------------------------------------------------- *
 * Copyright 2002-2021, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */
import { memo } from 'react'
import PropTypes from 'prop-types'

import { QuestionMarkCircle } from 'iconoir-react'
import { InputAdornment, Typography, Tooltip } from '@material-ui/core'

const AdornmentWithTooltip = memo(({ title, children }) => (
  <Tooltip
    arrow
    placement='bottom'
    title={
      <Typography variant='subtitle2'>
        {title}
      </Typography>
    }
  >
    <InputAdornment position='end' style={{ cursor: 'help' }}>
      {children ?? <QuestionMarkCircle size={18} />}
    </InputAdornment>
  </Tooltip>
), (prevProps, nextProps) => prevProps.title === nextProps.title)

AdornmentWithTooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

AdornmentWithTooltip.displayName = 'AdornmentWithTooltip'

export default AdornmentWithTooltip