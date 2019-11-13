import React from 'react';
import styles from './index.less';
import { Tools } from '@/utils/tools';

import { Topology } from 'topology-core';
import { Options } from 'topology-core/options';
import { registerNode } from 'topology-core/middles';
import {
  flowData,
  flowDataAnchors,
  flowDataIconRect,
  flowDataTextRect,
  flowSubprocess,
  flowSubprocessIconRect,
  flowSubprocessTextRect,
  flowDb,
  flowDbIconRect,
  flowDbTextRect,
  flowDocument,
  flowDocumentAnchors,
  flowDocumentIconRect,
  flowDocumentTextRect,
  flowInternalStorage,
  flowInternalStorageIconRect,
  flowInternalStorageTextRect,
  flowExternStorage,
  flowExternStorageAnchors,
  flowExternStorageIconRect,
  flowExternStorageTextRect,
  flowQueue,
  flowQueueIconRect,
  flowQueueTextRect,
  flowManually,
  flowManuallyAnchors,
  flowManuallyIconRect,
  flowManuallyTextRect,
  flowDisplay,
  flowDisplayAnchors,
  flowDisplayIconRect,
  flowDisplayTextRect,
  flowParallel,
  flowParallelAnchors,
  flowComment,
  flowCommentAnchors
} from 'topology-flow-diagram';

import {
  activityFinal,
  activityFinalIconRect,
  activityFinalTextRect,
  swimlaneV,
  swimlaneVIconRect,
  swimlaneVTextRect,
  swimlaneH,
  swimlaneHIconRect,
  swimlaneHTextRect,
  fork,
  forkHAnchors,
  forkIconRect,
  forkTextRect,
  forkVAnchors
} from 'topology-activity-diagram';
import {
  simpleClass,
  simpleClassIconRect,
  simpleClassTextRect,
  interfaceClass,
  interfaceClassIconRect,
  interfaceClassTextRect
} from 'topology-class-diagram';
import {
  lifeline,
  lifelineAnchors,
  lifelineIconRect,
  lifelineTextRect,
  sequenceFocus,
  sequenceFocusAnchors,
  sequenceFocusIconRect,
  sequenceFocusTextRect
} from 'topology-sequence-diagram';

class Index extends React.Component<{}> {
  canvas: Topology;
  canvasOptions: Options = {};

  state = {
    tools: Tools,
    iconfont: { fontSize: '.24rem' }
  };

  componentDidMount() {
    this.canvasRegister();
    this.canvasOptions.on = this.onMessage;
    this.canvas = new Topology('topology-canvas', this.canvasOptions);
  }

  canvasRegister() {
    registerNode('flowData', flowData, flowDataAnchors, flowDataIconRect, flowDataTextRect);
    registerNode('flowSubprocess', flowSubprocess, null, flowSubprocessIconRect, flowSubprocessTextRect);
    registerNode('flowDb', flowDb, null, flowDbIconRect, flowDbTextRect);
    registerNode('flowDocument', flowDocument, flowDocumentAnchors, flowDocumentIconRect, flowDocumentTextRect);
    registerNode(
      'flowInternalStorage',
      flowInternalStorage,
      null,
      flowInternalStorageIconRect,
      flowInternalStorageTextRect
    );
    registerNode(
      'flowExternStorage',
      flowExternStorage,
      flowExternStorageAnchors,
      flowExternStorageIconRect,
      flowExternStorageTextRect
    );
    registerNode('flowQueue', flowQueue, null, flowQueueIconRect, flowQueueTextRect);
    registerNode('flowManually', flowManually, flowManuallyAnchors, flowManuallyIconRect, flowManuallyTextRect);
    registerNode('flowDisplay', flowDisplay, flowDisplayAnchors, flowDisplayIconRect, flowDisplayTextRect);
    registerNode('flowParallel', flowParallel, flowParallelAnchors, null, null);
    registerNode('flowComment', flowComment, flowCommentAnchors, null, null);

    // activity
    registerNode('activityFinal', activityFinal, null, activityFinalIconRect, activityFinalTextRect);
    registerNode('swimlaneV', swimlaneV, null, swimlaneVIconRect, swimlaneVTextRect);
    registerNode('swimlaneH', swimlaneH, null, swimlaneHIconRect, swimlaneHTextRect);
    registerNode('forkH', fork, forkHAnchors, forkIconRect, forkTextRect);
    registerNode('forkV', fork, forkVAnchors, forkIconRect, forkTextRect);

    // class
    registerNode('simpleClass', simpleClass, null, simpleClassIconRect, simpleClassTextRect);
    registerNode('interfaceClass', interfaceClass, null, interfaceClassIconRect, interfaceClassTextRect);

    // sequence
    registerNode('lifeline', lifeline, lifelineAnchors, lifelineIconRect, lifelineTextRect);
    registerNode('sequenceFocus', sequenceFocus, sequenceFocusAnchors, sequenceFocusIconRect, sequenceFocusTextRect);
  }

  onMessage = (event: string, data: any) => {
    switch (event) {
      case 'node':
      case 'addNode':

        break;
      case 'line':
      case 'addLine':

        break;
      case 'multi':

        break;
      case 'space':

        break;
      case 'moveOut':

        break;
      case 'resize':

        break;
      case 'scale':

        break;
      case 'locked':

        break;
    }
    // tslint:disable-next-line:no-console
    // console.log('onMessage:', event, data);
  };

  onDrag(event: React.DragEvent<HTMLAnchorElement>, node: any) {
    event.dataTransfer.setData('Text', JSON.stringify(node.data));
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.tools}>
          {
            this.state.tools.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.title}>{item.group}</div>
                  <div className={styles.buttons}>
                    {
                      item.children.map((btn: any, i: number) => {
                        return (
                          <a key={i} title={btn.name} draggable={true} onDragStart={(ev) => { this.onDrag(ev, btn) }}>
                            <i className={'iconfont ' + btn.icon} style={this.state.iconfont} />
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div id="topology-canvas" className={styles.full} />
        <div className={styles.props}>{}</div>
      </div>
    );
  }
}

export default Index;
