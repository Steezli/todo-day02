import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const text = dom.querySelector('.text');
        const radioButtons = dom.querySelectorAll('.radio');
        text.addEventListener('input', () => {

            this.props.onFilter({
                text: text.value,
                completed: ''
            });
        });
        
        radioButtons.forEach(button => {
            button.addEventListener('input', () => {
                this.props.onFilter({
                    text: '',
                    completed: button.value
                });
                
            });
            
        });
        
        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <section>
                <label>
                    Search tasks:<input class="text">
                </label>
                <label>
                    <input class="radio" type="radio" name="radio" value="all">All
                </label>
                <label>
                    <input class="radio" type="radio" name="radio" value="false">Not Done
                </label>
                <label>
                    <input class="radio" type="radio" name="radio" value="true">Completed
                </label>
            </section>
            `;
    }
}

export default Filter;