export function WhiteSection(props){
    return (
      <div
        className='whiteSection'
        style={{
          padding: props.paddingTB ? props.paddingTB : "3rem 0",
        }}
      >
        <section
          style={{
            textAlign: props.textAlign ? props.textAlign : "left",
            padding: props.paddingLR ? props.paddingLR : "0 3rem",
          }}
        >
          {props.children}
        </section>
      </div>
    );
  }


export function GreySection(props){
    return (
      <div
        className='greySection'
        style={{
          padding: props.paddingTB ? props.paddingTB : "3rem 0",
        }}
      >
        <section
          style={{
            textAlign: props.textAlign ? props.textAlign : "left",
            padding: props.paddingLR ? props.paddingLR : "0 3rem",
          }}
        >
          {props.children}
        </section>
      </div>
    );
  }


export function Card(props){
    return (
      <div
        className='card'
        style={{
          textAlign: props.textAlign ? props.textAlign : "center",
          padding: props.padding ? props.padding : "2rem 3rem",
        }}
      >
        {props.children}
      </div>
    );
  }

