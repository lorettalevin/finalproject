import React from 'react';
import {connect} from 'react-redux';
import AddImages from './AddImages';
import {getImages} from './actions';

const mapStateToProps = (state, props) => {
    return {
        images: state.images.filter( image => props.page.id == image.page_id)
    }
}

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderImages = this.renderImages.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getImages(this.props.page.id))
    }

    renderImages() {
        if(!this.props.images) {
            return (
                <div>Loading...</div>
            )
        }

         return this.props.images.map( image => {
             console.log(image.file);
             return (

                <img className="render-images" key={image.id} src={image.file} alt="scrapbook pictures"
                    />
             )
         })
    }

    render() {
        console.log("rendinger", this.props);
        return (
            <div className="edit-page-single">
                <AddImages
                    page_id={this.props.page.id}
                    />
                {this.renderImages()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(EditPage)





// <div className="edit-page-component-wrapper">
//     <p id="page-header">{this.props.page.header}</p>
//     <div id="image-uploader">
//         <AddImages
//             page_id={this.props.page.id}
//         />
//     </div>
// </div>
