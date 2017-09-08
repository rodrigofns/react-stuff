import React, { Component } from 'react';
import Button from '../material-design/Button';
import Dialog from '../material-design/Dialog';

class Outra extends Component {
	render() {
		return (
			<Dialog id="outra" title="Outra">
				Texto texto<br/>
				<Button raised onClick={() => Dialog.close('outra')}>Fecha</Button>
			</Dialog>
		);
	}
}

export default class Home extends Component {
	abre1 = () => {
		Dialog.show('pop', data => {
			console.log(data)
		});
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>Hey.</p>
				<Button raised onClick={this.abre1}>Pipocar</Button>
				<Dialog id="pop" title="Esta é uma janela">
					Primeiro popup.<br/>
					Opções.<br/>
					<Button raised onClick={() => Dialog.show('outra')}>Outra</Button>{' '}
					<Button raised onClick={() => Dialog.close('pop', 'oi')}>Fecha</Button>
				</Dialog>
				<Outra/>
			</div>
		);
	}
}
