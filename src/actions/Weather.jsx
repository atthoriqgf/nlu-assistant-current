import { RequestContext, Text } from '@botonic/react'
import React from 'react'

const renderTable = () =>
  '### Weather Report\n<div style="display:flex;align-items:center;flex-direction:column;"><img src="https://www.flaticon.com/svg/static/icons/svg/169/169367.svg" alt="Sun" style="height:50px;width:50px;margin:5px;"/><em>Sunny</em></div>\n\n| ๐ | ๐ก๏ธ | ๐จ |\n| ------ | ------ | ------ |\n| **Barcelona** | 25ยบC | 10km/h |\n'

export default class extends React.Component {
  static contextType = RequestContext

  render() {
    let _ = this.context.getString
    return (
      <>
        <Text>{_('weather')}</Text>
        <Text>{renderTable()}</Text>
      </>
    )
  }
}
