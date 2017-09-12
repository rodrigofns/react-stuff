import React, { Component } from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogFooter
} from '../react-material-easy';

class Outra extends Component {
	render() {
		return (
			<Dialog id="outra">
				Texto texto<br/>
				<DialogFooter>
					<Button primary onClick={() => Dialog.close('outra')}>Fecha</Button>
				</DialogFooter>
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
				<Button raised accent onClick={this.abre1}>Pipocar</Button>
				<Dialog id="pop" width="300px">
					<DialogHeader>Título</DialogHeader>
					Primeiro popup.<br/>
					Opções.<br/>
					<DialogFooter>
						<Button primary onClick={() => Dialog.show('outra')}>Outra</Button>{' '}
						<Button autoFocus accent onClick={() => Dialog.close('pop', 'oi')}>Fecha</Button>
					</DialogFooter>
				</Dialog>
				<Outra/>
			</div>
		);
	}
}
