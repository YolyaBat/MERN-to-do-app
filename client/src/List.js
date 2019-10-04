import React, { Component } from 'react'
import './App.css'

class List extends Component {
  	render() {
		const { getData } = this.props;
		return (
			<ul>
				{getData.map((data) => (
					<li style={{ padding: '10px' }} key={data.message}>
						<span style={{ color: 'gray' }}> №: </span> {data.id} <br />
						<span style={{ color: 'gray' }}> what to do: </span>
						<span className='listItem'>{data.message}</span>
					</li>
				))}
			</ul>
		)
  	}
}
export default List