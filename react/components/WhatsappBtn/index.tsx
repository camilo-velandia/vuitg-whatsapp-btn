import React from 'react'
import PropTypes from 'prop-types'

type WhatsappBtnProps = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappBtn = ({
  logo,
  phone,
  message,
  width,
  height,
}: WhatsappBtnProps) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <div className="fixed bottom-2 right-2 flex flexColumn">
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img width={width} height={height} src={logo} alt="whatsapp logo" />
      </a>
    </div>
  )
}

WhatsappBtn.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappBtn.defaultProps = {
  logo: 'logo',
  phone: '3209653839',
  message: 'ingresa tu duda',
  width: 80,
  height: 80,
}
WhatsappBtn.schema = {
  title: 'whatsApp button',
  type: 'object',
  properties: {
    logo: {
      title: 'logo de whatsApp',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'phone',
      description: 'add phone number',
      type: 'string',
    },
    message: {
      title: 'message',
      description: 'add visible message to the customer',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'message',
      description: 'add visible message to the customer',
      type: 'number',
    },
    height: {
      title: 'message',
      description: 'add visible message to the customer',
      type: 'number',
    },
  },
}

export default WhatsappBtn
