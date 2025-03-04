import * as React from 'react';

import {
  TreeItem2,
} from '@mui/x-tree-view/TreeItem2';
import { ILabelProps, ITreeItemProps } from '../../models';

import { Label } from './Label';


export const TreeViewItem = React.forwardRef(function TreeItem(
    props: ITreeItemProps,
    ref: React.Ref<HTMLLIElement>,
    ) {
        return (
            <TreeItem2
                {...props}
                ref={ref}
                slots={{
                    label: Label,
                }}
                slotProps={{
                    label: { 
                        addBtnClickHandler: props.addBtnClickHandler,
                        editBtnClickHandler: props.editBtnClickHandler,
                        deleteBtnClickHandler: props.deleteBtnClickHandler,
                        itemId: props.itemId,
                        itemName: props.label,
                     } as ILabelProps,
                }}
            />
        );
    }
)