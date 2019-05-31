import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        form.addEventListener('input', () => {
            const checkedRadio = form.elements['status'].value;
            const textResult = form.elements['text'].value;
            this.props.onFilter({
                task: textResult,
                radio: checkedRadio
            });
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div id="filters">  
                <form id="filter">
                    <section>
                        <input type="text" name="text" id="textFilter" placeholder="Search:">
                    </section>
                    <section>
                        <label>All
                            <input name="status" type="radio" value="all" class="radio" checked>
                        </label>
                        <label>Completed
                            <input name="status" type="radio" value="true" class="radio">
                        </label>
                        <label>Incomplete
                            <input name="status" type="radio" value="false" class="radio">
                        </label>
                    </section>
                </form>
            </div>
        `;
    }
}

export default Filter;