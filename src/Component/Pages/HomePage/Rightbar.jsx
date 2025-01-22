import styled from "styled-components";
import PlayList from "../../assets/PlayList";

const Rightbar = () => {
    const RightWrapper = styled.div`
        position: fixed;
        left: 78%;
        top: 17%;
        width: 19vw;
        height: 73vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin: 30px;
        border-radius: 20px;
        background-color: #27272F;
    `;

    const RadioButtonWrapper = styled.div`
        display: inline-block;
        position: relative;
        margin-right: 10px;
    `;

    const RadioButtonLabel = styled.label`
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
    `;

    const CustomRadioButton = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #4CAF50;
        background-color: ${({ checked }) => (checked ? '#4CAF50' : 'transparent')};
        position: relative;
        margin-right: 8px;

        &::after {
            content: '';
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            top: 4px;
            left: 4px;
            opacity: ${({ checked }) => (checked ? 1 : 0)};
        }

        &:hover {
            border-color: #007bff;
        }
    `;

    const FirstSection = styled.div``;
    const Title = styled.div`
        margin: 10px;
    `;
    const Box = styled.div`
        height: 4vh;
        width: 15vw;
        border: 1px solid grey;
        border-radius: 10px;
        margin: 10px;
        padding-left: 1vw;
        padding-top: 7px;
        font-size: 14px;
    `;
    const SecondSection = styled.div``;
    const ThirdSection = styled.div``;

    const RadioButton = styled.input`
        margin: 10px;
        accent-color: blue;
    `;

    const ProductList = styled.div`
       
    height: 35vh; 
    overflow-y: scroll; 
    margin: 10px;
    display: flex;
    flex-direction: column;

    /* Hide the scrollbar */
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
`;
    const FouthSection = styled.div`
margin-left:75px;
 text-align:center;
 border-radius:10px;
 background-color:#017EFA;
 height:30px;
 width:10vw;
`;

    return (
        <RightWrapper>
            <FirstSection>
                <Title>
                    Thumbnail Title
                </Title>
                <Box>
                    Get Sporty in Style
                </Box>
            </FirstSection>
            <SecondSection>
                <Title>
                    Video status
                </Title>
                <RadioButton type="radio" />
                <label >Active</label>
                <RadioButton type="radio" />
                <label >Inactive</label>
            </SecondSection>
            <ThirdSection>
                <Title>
                    Product List
                </Title>
                <ProductList>
                    <PlayList />
                    <PlayList />
                    <PlayList />
                    <PlayList />
                    {/* Add more items if needed */}
                </ProductList>
            </ThirdSection>
            <FouthSection>
                <img
                    src="https://img.icons8.com/?size=100&id=59872&format=png&color=FFFFFF"
                    height={20}
                    width={20}
                    alt="Update Icon"
                    style={{"padding":"3px 5px 0px 0"}}
                />
                Update Playlist
            </FouthSection>
        </RightWrapper>
    );
};

export default Rightbar;
