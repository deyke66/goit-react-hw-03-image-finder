import { Component } from 'react';
import style from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { getData } from './helpers/fetchFunc';


export class App extends Component {
  state = {
    searchResult: '',
    page: 1,
    articles: [],
    isLoading: false,
    showModal: false
  };


  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchResult !== this.state.searchResult) {
      try {
        const fetchData = await getData(this.state.searchResult, this.state.page);
        const result = fetchData.data.hits
        this.setState({articles: [...result]})
      } catch (error) {
        
      }
    }
  }

  handleToggleModal = e => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      }
    })
  }
  handleSubmitBtn = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;

    this.setState({ searchResult: value });
  };
  render() {
    const { articles, showModal } = this.state
    console.log('app', showModal)
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleSubmitBtn} />
        <Gallery articles={articles} onClick={this.handleToggleModal} showModal={showModal} />
      </div>
    );
  }
}
