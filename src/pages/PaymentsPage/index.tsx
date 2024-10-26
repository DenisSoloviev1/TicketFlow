import { useState } from 'react';
import { Typography, Card, Space, Row, Col, Switch, Flex, Avatar, Cascader } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import type { CascaderProps } from 'antd';


const { Title, Text, Link } = Typography;

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const options: Option[] = [
    {
        value: 'sng',
        label: 'СНГ',
        children: [
            {
                value: 'almaty',
                label: 'Алматы',
                children: [
                    {
                        value: 'almaty_vokzal',
                        label: 'Вокзал Алматы',
                    },
                ],
            },
            {
                value: 'minsk',
                label: 'Минск',
                children: [
                    {
                        value: 'minsk_vokzal',
                        label: 'Вокзал Минска',
                    },
                ],
            },
        ],
    },
    {
        value: 'russian',
        label: 'Россия',
        children: [
            {
                value: 'moscow',
                label: 'Москва',
                children: [
                    {
                        value: 'moscow_vokzal_1',
                        label: 'Казанский вокзал',
                    },
                    {
                        value: 'moscow_vokzal_2',
                        label: 'Ленинградский вокзал',
                    },
                ],
            },
            {
                value: 'stpetersburg',
                label: 'Санкт-Петербург',
                children: [
                    {
                        value: 'stpete_vokzal_1',
                        label: 'Витебский вокзал',
                    },
                    {
                        value: 'stpete_vokzal_2',
                        label: 'Московский вокзал',
                    },
                ],
            },
        ],
    },
];


const onChange: CascaderProps<Option>['onChange'] = (value) => {
    console.log(value);
};

const displayRender = (labels: string[]) => labels[labels.length - 1];

const actions: React.ReactNode[] = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
];

const PaymentsPage = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} />
            <Title level={2}>Оплата билетов</Title>

            <Card title="Доступные стопосбы оплаты" size="small">
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Flex gap="middle" align="start" vertical>
                            <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
                                <Card.Meta
                                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                                    title="Card title"
                                    description={
                                        <>
                                            <p>This is the description</p>
                                            <p>This is the description</p>
                                        </>
                                    }
                                />
                            </Card>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
                            <Card.Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                                title="Card title"
                                description={
                                    <>
                                        <p>This is the description</p>
                                        <p>This is the description</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
                            <Card.Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                                title="Card title"
                                description={
                                    <>
                                        <p>This is the description</p>
                                        <p>This is the description</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                </Row>
            </Card>

        </Space>
    )
}

export { PaymentsPage };