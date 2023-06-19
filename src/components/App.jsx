import { Component } from 'react';
import style from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { getData } from './helpers/fetchFunc';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchResult: '',
    page: 1,
    articles: [],
    originalImg: '',
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchResult !== this.state.searchResult) {
      try {
        const fetchData = await getData(
          this.state.searchResult,
          this.state.page
        );
        const result = fetchData.data.hits;
        this.setState({ articles: [...result] });
      } catch (error) {}
    }
  }
  modalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSaveUrlForModal = e => {
    this.setState({ originalImg: e.currentTarget.dataset.source });
    this.modalToggle();
  };
  handleSubmitBtn = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;

    this.setState({ searchResult: value });
  };
  render() {
    const { articles, originalImg, showModal } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleSubmitBtn} />
        <Gallery articles={articles} onClick={this.handleSaveUrlForModal} />
        {showModal && (
          <Modal originalImg={originalImg} onClose={this.modalToggle} />
        )}
      </div>
    );
  }
}
